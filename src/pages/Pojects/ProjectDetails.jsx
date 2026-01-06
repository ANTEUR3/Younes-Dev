import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const ProjectDetails = ({ project }) => {
  return (
    <Stack
      pt={5}
      direction={"column"}
      justifyContent={"start"}
      alignItems={"start"}
    >
      <Typography
        sx={{ color: "rgba(23, 81, 168, 1)" }}
        component={"h1"}
        variant="h4"
      >
        {project?.name}
      </Typography>
      <Stack
        py={2}
        gap={1}
        direction={"row"}
        justifyContent={"start"}
        alignItems={"start"}
      >
        {project?.skills?.map((skill) => (
          <Button
            style={{
              borderRadius: 15,
              color: "rgba(23, 81, 168, 1)",
              borderColor: "rgba(23, 81, 168, 1)",
            }}
            variant="outlined"
          >
            <Typography variant="button">{skill}</Typography>
          </Button>
        ))}
      </Stack>
      <Typography color="rgba(51, 53, 56, 1)" variant="subtitle1">{project?.description}</Typography>

    </Stack>
  );
};

export default ProjectDetails;
