import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ type }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    //your save logic here
  };

  return (
    <div>
      <Button onClick={handleOpen} aria-label="Edit">
        <EditIcon />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {type === "contact" ? (
          <Box sx={style}>
            <div className="flex flex-col justify-center items-start gap-4">
              <p className="font-semibold text-xl w-[10rem]">
                Contact Number:{" "}
              </p>
              <div className="relative w-full">
                <input
                  placeholder="+63"
                  className="border-2 border-gray-200 p-4 rounded-lg w-full"
                />
              </div>
              <div className="w-full flex justify-between">
                <Button variant="contained" onClick={handleClose}>
                  save
                </Button>
                <Button variant="outlined" onClick={handleClose}>
                  cancel
                </Button>
              </div>
            </div>
          </Box>
        ) : (
          <Box sx={style}>
            <div className="flex flex-col justify-center items-start gap-4">
              <p className="font-semibold text-xl w-[10rem]">Password: </p>
              <div className="relative w-full">
                <input
                  placeholder="+63"
                  className="border-2 border-gray-200 p-4 rounded-lg w-full"
                />
              </div>
              <div className="w-full flex justify-between">
                <Button variant="contained" onClick={handleClose}>
                  save
                </Button>
                <Button variant="outlined" onClick={handleClose}>
                  cancel
                </Button>
              </div>
            </div>
          </Box>
        )}
      </Modal>
    </div>
  );
}
