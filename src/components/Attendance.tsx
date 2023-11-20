import * as React from "react";
import {
  DataGrid,
  GridToolbar,
  GridRowSelectionModel,
  GridRowId,
} from "@mui/x-data-grid";
import SelectButton from "./SelectButton";

import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid/components";

import Button from "@mui/material/Button";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    headerClassName: "bg-md-blue text-white border-r-2 border-black",
  },
];

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
    status: "Absent",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "987-654-3210",
    status: "Absent",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    phoneNumber: "555-123-4567",
    status: "Absent",
  },
  {
    id: 4,
    name: "Bob Anderson",
    email: "bob@example.com",
    phoneNumber: "777-888-9999",
    status: "Absent",
  },
  {
    id: 5,
    name: "Eva Williams",
    email: "eva@example.com",
    phoneNumber: "111-222-3333",
    status: "Absent",
  },
  {
    id: 6,
    name: "Michael Brown",
    email: "michael@example.com",
    phoneNumber: "444-555-6666",
    status: "Absent",
  },
  {
    id: 7,
    name: "Sophia Davis",
    email: "sophia@example.com",
    phoneNumber: "666-777-8888",
    status: "Absent",
  },
  {
    id: 8,
    name: "Matthew Miller",
    email: "matthew@example.com",
    phoneNumber: "888-999-0000",
    status: "Absent",
  },
  {
    id: 9,
    name: "Olivia Wilson",
    email: "olivia@example.com",
    phoneNumber: "222-333-4444",
    status: "Absent",
  },
  {
    id: 10,
    name: "Daniel Lee",
    email: "daniel@example.com",
    phoneNumber: "333-444-5555",
    status: "Absent",
  },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer className="flex justify-end">
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      {/* <CustomExportButton/> */}
    </GridToolbarContainer>
  );
}

export default function Attendance({ setShowAlert }) {
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

  const [session, setSession] = React.useState();

  const [selectedNames, setSelectedNames] = React.useState<string[]>([]);

  const [updatedData, setUpdatedData] = React.useState<object[]>(data);

  React.useEffect(() => {
    // Map over the original data and create a new array with updated status
    const updatedDataArray = data.map((item) => {
      // Check if the name is in the list to be updated
      if (selectedNames.includes(item.name)) {
        return { ...item, status: "Present" };
      } else {
        return { ...item };
      }
    });

    // Update the state with the new array
    // setUpdatedData(updatedDataArray);
    setUpdatedData(updatedDataArray.map((item) => ({ ...item, session })));
  }, [data, selectedNames]);

  const handleSaveData = () => {
    console.log(updatedData);
    setShowAlert(true);
  };

  return (
    <>
      <div className="w-[5%]">
        <SelectButton session={session} setSession={setSession} />
      </div>
      <div style={{ height: 600, width: "100%", padding: "1.5rem" }}>
        <DataGrid
          rows={updatedData}
          columns={columns}
          slots={{ toolbar: CustomToolbar }}
          checkboxSelection
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);

            const names = newRowSelectionModel
              .filter((isSelected) => isSelected)
              .map((index: any) => data[index - 1].name);

            setSelectedNames(names);
          }}
          rowSelectionModel={rowSelectionModel}
        />
      </div>
      <Button variant="contained" onClick={handleSaveData}>
        Save
      </Button>
    </>
  );
}
