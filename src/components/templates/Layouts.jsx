import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </React.Fragment>
  );
};
export default Layouts;
