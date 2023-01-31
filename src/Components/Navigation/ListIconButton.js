import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "./Navigation.scss";

export default function ListIconButton({ open, icon, itemName, onClick }) {
  return (
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
      }}
      onClick={onClick}
    >
      <ListItemIcon
        className="icons"
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
          color: "#ffffff",
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={itemName}
        sx={{ opacity: open ? 1 : 0, color: " #ffffff" }}
      />
    </ListItemButton>
  );
}
