import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const Sidebar = () => {
  const Sidebar_animation = {
    // System view
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "5rem",
      transition: {
        damping: 40,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <motion.div
        variants={Sidebar_animation}
        animate={isOpen ? "open" : "closed"}
        className="h-screen bg-primary text-secondary flex flex-col gap-4 px-4 z-[999] w-[16rem] max-w-[16rem] pt-20 overflow-hidden md:relative fixed"
      >
        {/* Logo */}
        <div className="flex items-center gap-4 border-b-2 border-secondary pb-4">
          <img
            src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-cashier-sales-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
            alt="Logo"
            width={50}
          />
          <span className="text-3xl font-semibold whitespace-pre">CASHIER</span>
        </div>

        {/* Menus */}
        <div>
          <ul className="whitespace-pre flex flex-col gap-2 overflow-x-hidden">
            <li>
              <NavLink to="/dashboard" className={"link"}>
                <TbLayoutDashboardFilled size={28} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Controll button */}
        <motion.button
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{
            duration: 0,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-2 md:block hidden"
        >
          Open
        </motion.button>

        {/* <a
          href="/dashboard"
          className=""
        >
          <TbLayoutDashboardFilled />
          <span className="font-semibold">Dashboard</span>
        </a> */}
      </motion.div>
    </div>
  );
};

export default Sidebar;
