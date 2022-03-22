import React from "react";
import { Box, Typography, Button, Paper, Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import JournalImage from "../../assets/journal.jpg";
import LaptopImage from "../../assets/laptop.jpg";

const Home: React.FC = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flex: "auto",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
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
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                },
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
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            flex: "auto",
            p: "40px",
            alignContent: "center",
            justifyContent: "center",
            maxWidth: { xs: "100%", sm: "100%", md: "50%" },
          }}
        >
          <Paper
            component="div"
            elevation={3}
            sx={{ p: "20px", borderRadius: "12px" }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                objectFit: "cover",
                aspectRatio: { xs: "auto", sm: "auto", md: "1/1" },
                borderRadius: "4px",
                boxShadow: 3,
              }}
              src={JournalImage}
              alt="An open journal with a drawing of an ocean wave on the left page"
            ></Box>
          </Paper>
        </Box>
      </Box>
      <Box component="div">
        <Divider
          textAlign="center"
          variant="middle"
          sx={{ "&::after, &::before": { borderTop: "thin solid #000" } }}
        >
          <Typography variant="body1">Why Journaler?</Typography>
        </Divider>
      </Box>
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
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            flex: "auto",
            p: "40px",
            alignContent: "center",
            justifyContent: "center",
            maxWidth: { xs: "100%", sm: "100%", md: "50%" },
          }}
        >
          <Paper
            component="div"
            elevation={3}
            sx={{ p: "20px", borderRadius: "12px" }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                objectFit: "cover",
                aspectRatio: { xs: "auto", sm: "auto", md: "1/1" },
                borderRadius: "4px",
                boxShadow: 3,
                minHeight: "300px",
              }}
              src={LaptopImage}
              alt="An open laptop with a bright shinning screen"
            ></Box>
          </Paper>
        </Box>
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
            variant="h5"
            sx={{
              textAlign: { xs: "center", sm: "center", md: "start" },
              mb: "20px",
            }}
          >
            Making journaling easier
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: { xs: "center", sm: "center", md: "start" },
            }}
          >
            Lorem ipsum dolor sit amet. A pleasure jouranler joy future with
            time to happens experience jouranler you will daily you having
            incredible. A time appreciate why jouranler this to daily where be
            this digital be jouranler journal to time where a happens this. Joy
            future write you where incredible be digital amazing joy happens
            time. Why digital great will journal a daily appreciate daily
            happens. Be experience journal to time will why with digital you
            time time joy jouranler digital?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
