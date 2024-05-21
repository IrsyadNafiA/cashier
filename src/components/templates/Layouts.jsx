import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layouts = () => {
  return (
    <React.Fragment>
      <div className="flex">
        <Sidebar />
        <div className="p-4 w-full text-primary bg-secondary h-screen">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layouts;
