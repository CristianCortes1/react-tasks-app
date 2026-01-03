import React from "react";
import Box from "@mui/material/Box";
function FormContainer({ children, sx, ...props }) {
  return (
    <Box
      sx={{
        mt: 2,
        mb: 2,
        p: 2,
        backgroundColor: "#132f4c",
        color: "#0B2545",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
        gap: "5px",
        width: "50%",
        boxShadow: "0 0 5px 3px #1565c0",
      }}
      component="form"
      {...props}
    >
      {children}
    </Box>
  );
}

export default FormContainer;
