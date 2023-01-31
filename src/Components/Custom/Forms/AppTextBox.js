import InputAdornment from "@mui/material/InputAdornment";
import { Box, TextField } from "@mui/material";
import style from "./style";
import { Controller } from "react-hook-form";

function AppTextBox({
  name,
  label,
  control,
  icon,
  helperText,
  error,
  ...textField
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const { ref, value, onChange } = field;

        return (
          <Box sx={style().textContainer}>
            <TextField
              {...textField}
              color="warning"
              error={error}
              onChange={onChange} // send value to hook form
              inputRef={ref}
              value={value}
              sx={style().text}
              size="small"
              type={name}
              variant="outlined"
              label={label}
              helperText={helperText}
              InputProps={{
                startAdornment: icon && (
                  <InputAdornment position="start">{icon}</InputAdornment>
                ),
              }}
            />
          </Box>
        );
      }}
    />
  );
}

export default AppTextBox;
