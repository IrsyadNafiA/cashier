import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};
export default Layouts;
