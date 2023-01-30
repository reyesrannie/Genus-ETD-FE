import React from "react";
import BallotIcon from "@mui/icons-material/Ballot";
import LabelIcon from "@mui/icons-material/Label";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ApprovalIcon from "@mui/icons-material/Approval";
import logo from "../../Assets/logo1.png";
import ListIconButton from "./ListIconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function AppDrawer() {
  return;
  //   return (
  // <Drawer variant="permanent" open={open}>
  //   <DrawerHeader>
  //     <Box
  //       sx={{
  //         display: open ? "flex" : "hidden",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         my: open ? 2 : 0,
  //       }}
  //     >
  //       <Toolbar>
  //         <img
  //           src={logo}
  //           style={{
  //             display: open ? "flex" : "hidden",
  //             flexDirection: "column",
  //             alignItems: "center",
  //             width: open ? "15vh" : "0vh",
  //             marginTop: open ? "2vh" : "0vh",
  //           }}
  //           alt="logo"
  //         />
  //       </Toolbar>
  //       <Typography variant="h8" noWrap component="div">
  //         GENUS ETD
  //       </Typography>
  //     </Box>
  //     <IconButton onClick={handleDrawerClose}>
  //       {theme.direction === "rtl" ? (
  //         <ChevronRightIcon />
  //       ) : (
  //         <ChevronLeftIcon />
  //       )}
  //     </IconButton>
  //   </DrawerHeader>
  //   <Divider />
  //   <List>
  //     <ListItem disablePadding sx={{ display: "block" }}>
  //       <ListIconButton
  //         open={open}
  //         itemName={"Account"}
  //         icon={<ManageAccountsIcon />}
  //         on
  //       />
  //       <ListIconButton
  //         open={open}
  //         itemName={"Material"}
  //         icon={<BallotIcon />}
  //       />
  //       <ListIconButton
  //         open={open}
  //         itemName={"Category"}
  //         icon={<LabelIcon />}
  //       />
  //       <ListIconButton
  //         open={open}
  //         itemName={"Ordering"}
  //         icon={<AddShoppingCartIcon />}
  //       />
  //       <ListIconButton
  //         open={open}
  //         itemName={"Approving"}
  //         icon={<ApprovalIcon />}
  //       />
  //     </ListItem>
  //   </List>
  // </Drawer>
  //   );
}
