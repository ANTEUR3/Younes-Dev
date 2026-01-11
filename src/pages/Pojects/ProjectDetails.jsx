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
  component="h1"
  variant="h4"
  sx={{
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 700,
    color: "#1E40AF", // matches button gradient
    letterSpacing: "-0.5px",
    lineHeight: 1.2,
  }}
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
  variant="contained"
  sx={{
    textTransform: "none",
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 600,
    fontSize: "0.95rem",
    px: 3,
    py: 1.2,
    borderRadius: "12px",
    background: "linear-gradient(135deg, #2563EB, #1E40AF)",
    boxShadow: "0 8px 24px rgba(37, 99, 235, 0.35)",
    transition: "all 0.25s ease",
    "&:hover": {
      background: "linear-gradient(135deg, #1D4ED8, #1E3A8A)",
      boxShadow: "0 12px 32px rgba(37, 99, 235, 0.45)",
      transform: "translateY(-2px)",
    },
    "&:active": {
      transform: "translateY(0)",
      boxShadow: "0 6px 16px rgba(37, 99, 235, 0.3)",
    },
  }}
>
  {skill}
</Button>
        ))}
      </Stack>
      <Typography sx={{
        fontWeight:'bold',
        fontSize:'20px',

    lineHeight: 1.6,
  }} color="rgba(51, 53, 56, 1)" variant="subtitle1">{project?.description}</Typography>

    </Stack>
  );
};

export default ProjectDetails;
