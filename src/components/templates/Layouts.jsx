import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layouts = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex gap-2">
        <Sidebar />
        <div className="p-4 w-full pt-20 text-primary bg-secondary">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layouts;
