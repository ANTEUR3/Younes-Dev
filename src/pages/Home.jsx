import React, { useState } from "react";
import NavBar from "../component/navBars/NavBar";
import { CustomDrawer } from "../component/Drawer/Drawer";
import { Toolbar } from "@mui/material";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavBar isOpenDrawer={open} setOpenDrawer={setOpen} />
      <CustomDrawer isOpenDrawer={open} setIsOpenDrawer={setOpen} />
      <Toolbar sx={{ minHeight: 72 }} /> {/* pushes content down */}
    </>
  );
};

export default Home;
