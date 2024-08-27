import React from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="px-[5vmax]">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
