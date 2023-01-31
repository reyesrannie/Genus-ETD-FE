import style from "./style";
import { Button, Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";

function AppButton({ name, variant, onClick, color, sx, startIcon }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#301e67",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        type="submit"
        color={color}
        variant={variant}
        sx={sx}
        onClick={onClick}
        startIcon={startIcon}
      >
        {name}
      </Button>
    </ThemeProvider>
  );
}

export default AppButton;
