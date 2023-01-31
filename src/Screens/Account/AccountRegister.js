import { Box, AppBar, Typography, Toolbar } from "@mui/material";
import React, { useState } from "react";
import "./Account.scss";
import AppTextBox from "../../Components/Custom/Forms/AppTextBox";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function AccountRegister() {
  const submitHandler = async (submitData) => {};

  const validationSchema = Yup.object({
    username: Yup.string().required().min(5),
    password: Yup.string().required().min(5),
  }).required();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Box className="newAccountContainer">
      <AppBar position="static">
        <Toolbar variant="regular">
          <Typography variant="h10" color="inherit" component="div">
            Register Account
          </Typography>
        </Toolbar>
      </AppBar>
      <form onSubmit={submitHandler}>
        <Box className="formContainer">
          <Box className="formContain">
            <AppTextBox
              control={control}
              name="name"
              label="Name"
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
          </Box>
          <Box className="formContain"></Box>
        </Box>
      </form>
    </Box>
  );
}
