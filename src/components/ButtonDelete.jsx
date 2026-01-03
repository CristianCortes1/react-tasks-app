import React from "react";
import Button from "@mui/material/Button";

function ButtonDelete({ children, sx, ...props }) {
  return (
    <Button
      sx={{
        backgroundColor: "#c62828",
        color: "#fff",
        borderRadius: "12px",
        textTransform: "none",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#ef5350",
        },
      }}
      variant="contained"
      {...props}
    >
      {children}
    </Button>
  );
}

export default ButtonDelete;
