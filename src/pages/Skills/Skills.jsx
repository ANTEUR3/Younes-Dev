import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import BackgroundImage from "../../assets/images/SkillsBK.png"
import Title from '../../component/Title/Title'
import SkillsButtons from './SkillsButtons'
import { color } from 'framer-motion'
const Skills = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
    >
      <Box
        sx={{
          position: "fixed", top: 0, left: 0, right: 0 ,height: "100vh"
        }}
      >
        <img src={BackgroundImage} style={{ width: "100%", height: "100%",opacity:0.7 }} />
        
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
            fontFamily: "'Helvetica', 'Arial', sans-serif",
            color:'rgba(23, 81, 168, 1)'
 }}
          >
            My Skills
          </Title>
          <SkillsButtons/>

          
        </Stack>
      </Container>
    </Box>
  )
}

export default Skills