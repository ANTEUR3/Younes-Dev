import { Container, IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import useNavBarItemStore from "../../store/navBarItemStore";
import { useMemo } from "react";
import {Link} from 'react-router-dom'
import { Link as MuiLink } from "@mui/material";
import { GoProject } from "react-icons/go";
import { LiaBuromobelexperte } from "react-icons/lia";
import { BsStars } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";

export const DesktopItems = () => {

  const {setSelectedItem , selectedItem}=useNavBarItemStore()

  const items = [
    { id: 0, link:'/', item: "About",icon:<FaUser /> },
    { id: 1, link:'/skills', item: "Skills",icon:<BsStars/> },
    { id: 2, link:'/', item: "Experiences",icon:<LiaBuromobelexperte/> },
    { id: 4, link:'/Projects', item: "Projects",icon:<GoProject/> },
  ];

  const displayItems = useMemo(() => {
    return items.map((item) => (
      <MuiLink
        component={Link}
        to={item.link}
        underline="none"
        onClick={() => setSelectedItem(item.item)}
        sx={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 900,
          fontSize: {
            xs: "0.9rem",
            sm: "1rem",
            md: "1.05rem",
            lg: "1.6rem",
          },
          cursor: "pointer",
          color:
            selectedItem === item.item
              ? "rgba(34, 90, 175, 1)"
              : "rgba(0, 0, 0, 0.75)",
          position: "relative",
          transition: "color 0.25s ease",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: 1,

          "&:hover": {
            color: "rgba(34, 90, 175, 1)",
          },

          // underline animation
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: -4,
            width: selectedItem === item.item ? "100%" : "0%",
            height: "2px",
            backgroundColor: "rgba(34, 90, 175, 1)",
            transition: "width 0.25s ease",
          },

          "&:hover::after": {
            width: "100%",
          },
        }}
      >
        {item.icon}
        {item.item}
      </MuiLink>
    ));
  }, [items]);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="start"
      spacing={6}
    >
      {displayItems}
    </Stack>
  );
};

export const MobileMenu = ({ setOpenDrawer, isOpenDrawer }) => {
  return (
    <IconButton
      onClick={() => {
        setOpenDrawer(!isOpenDrawer);
      }}
    >
      {isOpenDrawer ? (
        <ChevronRightIcon />
      ) : (
        <MenuIcon sx={{ color: "text.secondary" }} />
      )}
    </IconButton>
  );
};
