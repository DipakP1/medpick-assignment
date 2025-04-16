import { Button } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AddButton = () => {
  return (
    <Button
      variant="contained"
      startIcon={<AddCircleOutlineIcon />}
      sx={{ textTransform: "none", backgroundColor: "#2563EB" }}
    >
      Add New
    </Button>
  );
};

export default AddButton;
