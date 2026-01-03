import React from "react";
import TextField from "@mui/material/TextField";
function InputText({ label, inputRef, ...props }) {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      inputRef={inputRef}
      sx={{
        "& .MuiInputBase-input": {
          color: "#90caf9",
        },
        "& label.Mui-focused": {
          color: "#90caf9",
        },
        "& .MuiInputLabel-root": {
          color: "#42a5f5",
        },
        // Línea normal (sin focus)
        "& .MuiInput-underline:before": {
          borderBottomColor: "#1976d2",
        },

        // Hover (CORRECTO)
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottomColor: "#42a5f5",
        },

        // Focus
        "& .MuiInput-underline:after": {
          borderBottomColor: "#64b5f6",
        },
        label: { color: "#1976d2" },
      }}
      {...props}
    />
  );
}

export default InputText;
