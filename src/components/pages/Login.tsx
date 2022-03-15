import React, { useState } from "react";
import {
  Box,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

interface Credentials {
  email: string;
  password: string;
  showPassword: boolean;
}

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Call DB here
  };

  const handleClickShowPassword = () => {
    setCredentials({
      ...credentials,
      showPassword: !credentials.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        flex: "auto",
        py: "2rem",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "space-between",
          minHeight: "300px",
          maxWidth: "256px",
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" sx={{ alignSelf: "center" }}>
          LOGIN
        </Typography>
        <FormControl sx={{ width: "100%" }} variant="filled">
          <InputLabel htmlFor="email-input">Email</InputLabel>
          <FilledInput
            id="email-input"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleInputs}
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }} variant="filled">
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <FilledInput
            id="password-input"
            type={credentials.showPassword ? "text" : "password"}
            name="password"
            value={credentials.password}
            onChange={handleInputs}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {credentials.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained" size="large" sx={{ width: "100%" }}>
          Login
        </Button>
        <Box component="div" sx={{ display: "flex", alignSelf: "center" }}>
          <Typography variant="body2">Don't have an account? </Typography>
          <Typography variant="body2" sx={{ ml: "3px" }}>
            <Link style={{ textDecoration: "none" }} to="/register">
              Register here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
