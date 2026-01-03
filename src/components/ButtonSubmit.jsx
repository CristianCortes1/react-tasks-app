import React from 'react'
import Button from "@mui/material/Button";

function ButtonSubmit({ children, sx, ...props}) {
  return (
    <Button
        sx={{
          backgroundColor: "#1976d2",
          color: "#fff",
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        }}
        variant="contained"
        type="submit"
        {...props}
      >
        {children}
      </Button>
  )
}

export default ButtonSubmit