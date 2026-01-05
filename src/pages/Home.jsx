import React, { useState , useMemo } from "react";
import NavBar from "../component/navBars/NavBar";
import { CustomDrawer } from "../component/Drawer/Drawer";
import { Toolbar } from "@mui/material";
import About from "./About/About";
import useNavBarItemStore from "../store/navBarItemStore";
import Skills from "./Skills/Skills";
const Home = () => {
    const {selectedItem , setSelectedItem }=useNavBarItemStore()
  
  const rendredPage=useMemo(()=>{
    switch(selectedItem){
      case 0:
        return <About/>
      case 1:
        return <Skills/>  
      default:
        return ''  
    }
  },[selectedItem])
  return (
    <div >
      <NavBar isOpenDrawer={open} setOpenDrawer={setOpen} />
      <CustomDrawer isOpenDrawer={open} setIsOpenDrawer={setOpen} />
      <Toolbar sx={{ minHeight: 72 }} />
      {rendredPage}
    </div>
  );
};

export default Home;
