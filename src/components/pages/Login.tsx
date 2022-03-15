import React, { useState } from "react";
import {
  Box,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "space-evenly",
          minHeight: "300px",
          maxWidth: "256px",
        }}
        onSubmit={handleSubmit}
      >
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="email-input">Email</InputLabel>
          <OutlinedInput
            id="email-input"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleInputs}
            label="email"
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <OutlinedInput
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
            label="Password"
          />
        </FormControl>
        <div>
          <Button variant="contained">Login</Button>
        </div>
        <p>
          Don't have an account? <a href="#username">Register here</a>
        </p>
      </Box>
    </Box>
  );
};

export default Login;
