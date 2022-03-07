import React, { useState } from "react";
import { AppBar, Tabs, Tab, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Brand from "../../assets/brand.svg";
const NavBar: React.FC = () => {
  const [value, setValue] = useState("home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <AppBar
      component="header"
      position="sticky"
      sx={{
        px: "30px",
        py: "15px",
        height: "94",
        borderRadius: "0px 0px 20px 20px",
        border: "4px solid #3E2B24",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={Brand} alt="Journaler branding" />
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="header nav links"
        sx={{ p: "8px", backgroundColor: "#3E2B24", borderRadius: "6px" }}
      >
        <Tab value="home" label="Home" />
        <Tab value="dashboard" label="Dashboard" />
        <Tab value="about" label="About" />
        <Tab value="contact" label="Contact" />
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ px: "24px", py: "19px", borderRadius: "6px" }}
        startIcon={<PersonIcon />}
      >
        Login
      </Button>
    </AppBar>
  );
};

export default NavBar;
