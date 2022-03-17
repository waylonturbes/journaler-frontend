import React, { useState } from "react";
import {
  Box,
  InputLabel,
  FilledInput,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Credentials {
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Call DB here
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
          REGISTER
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
            type="text"
            name="password"
            value={credentials.password}
            onChange={handleInputs}
          />
        </FormControl>
        <Button variant="contained" size="large" sx={{ width: "100%" }}>
          Register
        </Button>
        <Box component="div" sx={{ display: "flex", alignSelf: "center" }}>
          <Typography variant="body2">Already have an account?</Typography>
          <Typography variant="body2" sx={{ ml: "3px" }}>
            <Link style={{ textDecoration: "none" }} to="/login">
              Login here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
