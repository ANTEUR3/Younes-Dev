import { Container, IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import useNavBarItemStore from "../../store/navBarItemStore";
import { useMemo } from "react";
import {Link} from 'react-router-dom'
export const DesktopItems = () => {

  const {setSelectedItem , selectedItem}=useNavBarItemStore()

  const items = [
    { id: 0, link:'/', item: "About" },
    { id: 1, link:'/skills', item: "Skills" },
    { id: 2, link:'/', item: "Experiences" },
    { id: 3, link:'/', item: "Education" },
    { id: 4, link:'/Projects', item: "Projects" },
  ];

  const displayItems = useMemo(() => {
    return items.map((item) => (
      <Link
        onClick={()=>setSelectedItem(item.item)}
        to={`${item.link}`}
        variant="h5"
        underline="none"
      >
        <Typography sx={{fontWeight:'bold', fontSize:'26px',color:selectedItem==item.item?'rgba(34, 90, 175, 1)':'black'}}>
            {item.item}
        </Typography>
      </Link>
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
