import React from "react";
import {
  AppBar,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useScrollPosition from "../../hooks/useScrollPosition";
import Logo from "../../assets/images/logo_.png";
import { DesktopItems } from "./items.jsx";
import { MobileMenu } from "./items.jsx";
import { Outlet } from "react-router-dom";
const NavBar = ({ setOpenDrawer, isOpenDrawer }) => {
  const scrollPosition = useScrollPosition();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: 72,
        bgcolor: scrollPosition > 10 ? "#b8c7f0b3" : "transparent",
        position: "fixed",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backdropFilter: scrollPosition > 10 && "blur(60px)",
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
          direction={"row"}
          alignItems={"center"}
          justifyContent={isMobile ? "space-between" : "start"}
          flexWrap={"wrap"}
          spacing={7}
        >
          <img src={Logo} style={{ height: "65px", objectFit: "contain" }} />
          {!isMobile && <DesktopItems />}
          {isMobile && (
            <MobileMenu
              isOpenDrawer={isOpenDrawer}
              setOpenDrawer={setOpenDrawer}
            />
          )}
        </Stack>
      </Container>
    </AppBar>
    <Outlet/>
    </>
  
  );
};

export default NavBar;
