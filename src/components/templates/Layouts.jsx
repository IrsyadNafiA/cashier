import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layouts = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="pt-20 px-4 w-full text-primary bg-secondary h-screen">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layouts;
