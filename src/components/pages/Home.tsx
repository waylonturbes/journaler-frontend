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
        flexDirection: { xs: "column", sm: "column", md: "row" },
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
          maxWidth: { xs: "100%", sm: "100%", md: "50%" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 500,
            marginBottom: "30px",
            textAlign: { xs: "center", sm: "center", md: "start" },
          }}
        >
          Write journals digitally today!
        </Typography>
        <Box component="div" sx={{ justifySelf: "center" }}>
          <Box
            component={Link as any}
            to={"/register"}
            sx={{
              textDecoration: "none",
              display: "flex",
              justifyContent: { xs: "center", sm: "center", md: "flex-start" },
            }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIosIcon sx={{ height: "14px" }} />}
              sx={{
                py: "10px",
                width: { xs: "85%", sm: "60%", md: "auto" },
              }}
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
          maxWidth: { xs: "100%", sm: "100%", md: "50%" },
        }}
      >
        CONTENT
      </Box>
    </Box>
  );
};

export default Home;
