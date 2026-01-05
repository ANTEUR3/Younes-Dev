import { Box, Container, Stack } from "@mui/material";
import React from "react";
import {ProjectsData} from './projectsData'
import Project from "./Project";
const Projects = () => {  
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", 
            lg: "1fr 1fr",
          },
          rowGap: {
            xs: "20px",
            md: "50px",
            lg: "100px",
          },
          width: "100%",
        }}
      >
        {ProjectsData.map((project)=><Project project={project} />)}


      </Box>
    </Container>
  );
};

export default Projects;
