import { Container, IconButton, Link, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from '@mui/material/Button';
import useNavBarItemStore from "../../store/navBarItemStore";
import { useMemo } from "react";

export const DesktopItems = () => {
  const style = {
    fontWeight:760,
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#707572ff", 
    },
  };
  
  const {selectedItem , setSelectedItem }=useNavBarItemStore()
  
  const items=[{id:0,item:'About'},{id:1,item:'Skills'},{id:2,item:'Experiences'},{id:3,item:'Education'},{id:4,item:'Projects'}]
  const displayItems=useMemo(()=>{
    return items.map((item)=>(<Link onClick={()=>{console.log(item.id);
     setSelectedItem(item.id)}} href="#"  variant="h5" underline="none" sx={{...style,color:item.id===selectedItem?'blue.500':'black'}}>
        {item.item}
      </Link>))
  },[items,selectedItem])
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
