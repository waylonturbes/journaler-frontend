import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flex: "auto",
        flexDirection: { sm: "column", md: "row" },
        justifyContent: "center",
        alignContent: "center",
        p: "20px",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "auto",
          alignContent: "center",
          justifyContent: "center",
          p: "40px",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 500, marginBottom: "20px" }}>
          Write journals
          <br />
          digitally today!
        </Typography>
        <Box component="div" sx={{ justifySelf: "center" }}>
          <Box
            component={Link as any}
            to={"/register"}
            sx={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIosIcon sx={{ height: "14px" }} />}
              sx={{ py: "10px" }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "auto",
          p: "40px",
        }}
      >
        CONTENT
      </Box>
    </Box>
  );
};

export default Home;
