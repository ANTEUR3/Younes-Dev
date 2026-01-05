import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import NavBar from "./component/navBars/NavBar";
import { CustomDrawer } from "./component/Drawer/Drawer";
import { useState } from "react";
import Projects from './pages/Pojects/index'
function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <CustomDrawer isOpenDrawer={open} setIsOpenDrawer={setOpen} />
      <Routes>
        <Route
          path="/"
          element={<NavBar isOpenDrawer={open} setOpenDrawer={setOpen} />}
        >
          <Route index element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
