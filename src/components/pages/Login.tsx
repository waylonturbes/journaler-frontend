import React, { useState } from "react";
import { Box, TextField, FormControl, Button } from "@mui/material";

interface Credentials {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
          minHeight: "400px",
          maxWidth: "256px",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="username">
            <span>* </span>Username:
          </label>
          <input
            type="text"
            value={credentials.username}
            id="username"
            name="username"
            onChange={handleInputs}
          />
        </div>
        <div>
          <label htmlFor="password">
            <span>* </span>Password:
          </label>
          <input
            type="password"
            value={credentials.password}
            id="password"
            name="password"
            onChange={handleInputs}
          />
        </div>
        <p>
          Don't have an account? <a href="#username">Register here</a>
        </p>
        <div>
          <Button variant="contained">Login</Button>
        </div>
      </Box>
    </Box>
  );
};

export default Login;