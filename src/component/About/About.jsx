import { Box, Container, Stack, useTheme } from "@mui/material";
import React from "react";
import BackgroundImage from "../../assets/images/background1.jpg";
import Title from "../Title/Title";
import Summury from "./Summury";
const About = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
    >
      <Box
        sx={{
          position: "fixed", top: 0, left: 0, right: 0 ,height: "100vh"
        }}
      >
        <img src={BackgroundImage} style={{ width: "100%", height: "100%" }} />
        
      </Box>
      <Container
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          zIndex:1
                }}
      >
        <Stack
          direction="column"
          alignItems="start" 
          justifyContent="center"
          spacing={3}
          sx={{
            mt:'60px',
          }}
        >
          <Title
            variant={{ xl: "h1", lg: "h2", md: "h3", sm: "h4", xs: "h5" }}
            sx={{ mt: 5,maxWidth: 1200 ,     
            fontFamily: "'Helvetica', 'Arial', sans-serif"
 }}
          >
            Hi , I'm Younes Full Stack Web Developer 🌟
          </Title>

          <Summury />
          
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
