import React from 'react'
import Button from "@mui/material/Button";

function ButtonSubmit({ children, sx, ...props}) {
  return (
    <Button
        sx={{
          backgroundColor: "#7B2CBF",
          color: "#fff",
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#5A189A",
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