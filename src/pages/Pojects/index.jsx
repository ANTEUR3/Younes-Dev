import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { ProjectsData } from "./projectsData";
import Project from "./ProjectSlider";
import ProjectSlider from "./ProjectSlider";
import ProjectDetails from './ProjectDetails'
const Projects = () => {
  return (
    <Container sx={{ pt: "100px" }}>
      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: {
            xs: "1fr",
          },
          rowGap: {
            xs: "20px",
            md: "50px",
            lg: "100px",
          },
          width: "100%",
        }}
      >
        {ProjectsData.map((project, index) => (
          <Stack
            direction={{ sm: "column", lg: "row" }}
            alignItems={"start"}
            justifyContent={"center"}
            gap={5}
            width={'100%'}
          >
            <ProjectSlider  images={project?.images} index={index} />
            <ProjectDetails project={{ ...project, images: null }} />
          </Stack>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
