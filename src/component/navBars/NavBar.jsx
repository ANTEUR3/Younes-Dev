import React from 'react'
import { AppBar, Container, Stack, useMediaQuery, useTheme } from '@mui/material'
import useScrollPosition from '../../hooks/useScrollPosition';
import Logo  from '../../assets/images/logo_.png'

const NavBar = () => {

 const scrollPosition = useScrollPosition();
 const theme = useTheme();
 const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <AppBar
     elevation={0}
     sx={{
        py: 1,
        height: 72,
        bgcolor: scrollPosition > 10 ? "rgba(7, 16, 9, 0.7)" : "transparent",
        // backdropFilter: scrollPosition > 10 && "blur(60px)",
      }}
    >
    <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1380px!important",
          },
        }}
      >
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          flexWrap={'wrap'}
        >
        <img src={Logo} style={{ height: "65px", objectFit: "contain" }} />
        {!isMobile ?'':''}
        </Stack>
       

      </Container>
    </AppBar>
  )
}

export default NavBar