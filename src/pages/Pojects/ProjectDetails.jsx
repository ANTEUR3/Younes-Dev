import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { FaGithub , FaLinkedin} from "react-icons/fa";

const ProjectDetails = ({ project }) => {
  return (
    <Stack
      pt={5}
      direction={"column"}
      justifyContent={"start"}
      alignItems={"start"}
      width={{sm:'100%',lg:'50%'}}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight:{xs:300,md:700} ,
          color: "#1E40AF",
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
              px: {sx:1,md:3},
              py: {sx:0.6,md:1.2},
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
      <Typography
  variant="subtitle1"
  sx={{
    fontWeight: 500,
    fontSize: {
      xs: "0.1rem",
      sm: "0.95rem",
      md: "1rem",
      lg: "1.05rem",
    },
    lineHeight: 1.6,
    color: "rgba(51, 53, 56, 1)",
  }}
>
  {project?.description}
</Typography>
    <Stack direction={'row'}>
 {project.access?.map((item)=><Access item={item}  />)}
      <IconButton
    
      component="a"
      href={'https://www.linkedin.com/in/younes-anteur-76a094338/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAFS6uEIBYENUlbcC_XSNObzLNwrudngORvA'}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        "&:hover": {
        },
        mt:2
      }}
    >
      <FaLinkedin size={40} color="#2555ad"/>
    </IconButton>
    </Stack>
     
      
    </Stack>
  );
};

export default ProjectDetails;

const Access = ({item}) => {
  const icons=[
    {name:'gitHub',component:<FaGithub color="black" size={40}/>}
  ]
  return (
    <IconButton
    
      component="a"
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        "&:hover": {
        },
        mt:2
      }}
    >
      {icons?.find((icon)=>icon.name==item.icon)?.component}
    </IconButton>
  );
};
