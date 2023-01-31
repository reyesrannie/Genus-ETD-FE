import LockIcon from "@mui/icons-material/Lock";
import { yupResolver } from "@hookform/resolvers/yup";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AppTextBox from "../../Components/Custom/Forms/AppTextBox";
import AppButton from "../../Components/Custom/Forms/AppButton";
import { useForm } from "react-hook-form";
import logo from "../../Assets/logo1.png";
import style from "./styles";
import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import AppBackground from "../../Components/Custom/AppBackground";
import * as Yup from "yup";
import "./loginScreen.scss";

import { useNavigate } from "react-router";

import { useLoginApi } from "../../Services/loginUser";

function LoginScreen() {
  const [loginError, setLoginError] = useState("");
  const { mutate: loginUser, isLoading } = useLoginApi();

  const submitHandler = async (submitData) => {
    loginUser(submitData, {
      onSuccess: (res) => {
        navigate("/");
        sessionStorage.setItem("userToken", res.data.result.token);
        sessionStorage.setItem("userName", res.data.result.account.name);
        window.location.reload(false);
      },
      onError: (err) => {
        setLoginError(err.response.data.message);
      },
    });
  };

  const navigate = useNavigate();
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
    <AppBackground>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Container
          sx={style().items}
          className="items"
          maxWidth="false"
          disableGutters={true}
        >
          <Box sx={style().logo}>
            <img src={logo} style={style().logo1} alt="logo" />
            <Typography>GENUS ETD</Typography>
          </Box>
          <Box sx={style().form} className="form">
            <Typography className="text">USER LOGIN</Typography>

            <AppTextBox
              control={control}
              name="username"
              label="Username"
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
              icon={<AccountCircle sx={style().icon} />}
            ></AppTextBox>
            <AppTextBox
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              control={control}
              name="password"
              label="Password"
              icon={<LockIcon sx={style().icon} />}
            ></AppTextBox>
            {loginError && (
              <Typography
                sx={{
                  fontSize: 12,
                  color: "red",
                }}
              >
                {loginError}
              </Typography>
            )}
            <AppButton
              color={"warning"}
              name="Sign In"
              variant="outlined"
            ></AppButton>
            <Box sx={style().textContainer}>
              <Typography className="text">POWERED BY MIS</Typography>
            </Box>
          </Box>
        </Container>
      </form>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar> */}
    </AppBackground>
  );
}

export default LoginScreen;
