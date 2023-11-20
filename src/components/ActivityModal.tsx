import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import {
  DataGrid,
  GridToolbar,
  GridRowSelectionModel,
  GridRowId,
} from "@mui/x-data-grid";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid red",
  boxShadow: 24,
  p: 4,
};

export default function ActivityModal({ session, data, setShowAlert }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //STATES
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);
  const [selectedActivity, setSelectedActivity] = React.useState<string[]>([]);
  const [updatedData, setUpdatedData] = React.useState<object[]>(data);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      headerClassName: "bg-md-blue text-white border-r-2 border-black",
    },
    {
      field: "name",
      headerName: "Activity",
      width: 300,
      headerClassName: "bg-md-blue text-white border-r-2 border-black",
    },
    {
      field: "status",
      headerName: "Status",
      width: 300,
      headerClassName: "bg-md-blue text-white border-r-2 border-black",
    },
  ];

  const handleSaveData = () => {
    console.log(updatedData);
    setShowAlert(true);
  };

  React.useEffect(() => {
    // Map over the original data and create a new array with updated status
    const updatedDataArray = data.map((item) => {
      // Check if the name is in the list to be updated
      if (selectedActivity.includes(item.name)) {
        return { ...item, status: "Done" };
      } else {
        return { ...item };
      }
    });

    // Update the state with the new array
    setUpdatedData(updatedDataArray);
  }, [data, selectedActivity]);

  return (
    <div>
      <Button onClick={handleOpen} aria-label="Edit">
        <p className="text-lg font-semibold ">View</p>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col gap-1">
            <div className="flex gap-4 justify-start items-end">
              <p className="text-3xl font-bold">Fire and Safety</p>
              <p className="text-lg ">Session 1</p>
            </div>
            <div>showing list of all activities for this Session</div>
          </div>
          <div>
            <div style={{ height: 400, width: "100%", padding: "1.5rem" }}>
              <DataGrid
                rows={updatedData}
                columns={columns}
                checkboxSelection
                onRowSelectionModelChange={(newRowSelectionModel) => {
                  setRowSelectionModel(newRowSelectionModel);

                  const activities = newRowSelectionModel
                    .filter((isSelected) => isSelected)
                    .map((index: any) => data[index - 1].name);

                  setSelectedActivity(activities);
                }}
                rowSelectionModel={rowSelectionModel}
              />
            </div>
            <Button variant="contained" onClick={handleSaveData}>
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
