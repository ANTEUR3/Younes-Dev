import React, { useState } from "react";
import NavBar from "../component/navBars/NavBar";
import { CustomDrawer } from "../component/Drawer/Drawer";
import { Toolbar } from "@mui/material";
import About from "../component/About/About";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div >
      <NavBar isOpenDrawer={open} setOpenDrawer={setOpen} />
      <CustomDrawer isOpenDrawer={open} setIsOpenDrawer={setOpen} />
      <Toolbar sx={{ minHeight: 72 }} />
      <About/>
    </div>
  );
};

export default Home;
