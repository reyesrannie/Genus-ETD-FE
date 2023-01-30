import { Box, Container } from "@mui/material";
import React from "react";
import "./AppBackground.scss";

function AppBackground({ children }) {
  return (
    <>
      <Container
        maxWidth="false"
        disableGutters={true}
        className="container"
      ></Container>
      <Box className="childContainer">{children}</Box>
    </>
  );
}

export default AppBackground;
