import React from "react";
import Button from "@mui/material/Button";

function ButtonDelete({ children, sx, ...props }) {
  return (
    <Button
      sx={{
        backgroundColor: "#590d22",
        color: "#fff",
        borderRadius: "12px",
        textTransform: "none",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#ff4d6d",
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
