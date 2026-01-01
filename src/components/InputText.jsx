import React from "react";
import TextField from "@mui/material/TextField";
function InputText({ label, sx, inputRef, ...props }) {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      inputRef={inputRef}
      sx={{
        "& .MuiInputBase-input": {
          color: "#E0AAFF",
        },
        "& label.Mui-focused": {
          color: "#E0AAFF",
        },
        "& .MuiInputLabel-root": {
          color: "#3C096C",
        },
        // Línea normal (sin focus)
        "& .MuiInput-underline:before": {
          borderBottomColor: "#3C096C",
        },

        // Hover (CORRECTO)
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottomColor: "#5A189A",
        },

        // Focus
        "& .MuiInput-underline:after": {
          borderBottomColor: "#7B2CBF",
        },
        label: { color: "#7B2CBF" },
      }}
      {...props}
    />
  );
}

export default InputText;
