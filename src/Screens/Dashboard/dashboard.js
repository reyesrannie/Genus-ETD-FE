import * as React from "react";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBackground from "../../Components/Custom/AppBackground";
import MenuAppBar from "../../Components/Navigation/MenuAppBar";
import Account from "../Account/Account";
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      dark: "#00425A",
      light: "#1F8A70",
    },
    secondary: {
      main: "#AD8E70",
    },
  },
});

export default function DashBoard() {
  return (
    <ThemeProvider theme={theme}>
      <AppBackground>
        <Box>
          <MenuAppBar children={<Account />} />
        </Box>
      </AppBackground>
    </ThemeProvider>
  );
}
