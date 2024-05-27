// react-router packages
import { NavLink, useLocation } from "react-router-dom";

// other packages
import { motion } from "framer-motion";

// react packages
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

// icon
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { RiSidebarUnfoldFill } from "react-icons/ri";

// submenu
import SubMenu from "./SubMenu";

// component
const Sidebar = () => {
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
  const { pathname } = useLocation();

  // console.log(isTab, "isTab");
  // sidebar open state
  const [isOpen, setIsOpen] = useState(isTab ? false : true);

  useEffect(() => {
    if (isTab) {
      // mobile
      setIsOpen(false);
    } else {
      // system
      setIsOpen(true);
    }
  }, [isTab]);

  // pathname change -> close sidebar
  useEffect(() => {
    isTab && setIsOpen(false);
  }, [isTab, pathname]);

  const Sidebar_animation = isTab
    ? {
        // mobile view
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        // System view
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenuList = [
    {
      name: "product",
      icon: MdProductionQuantityLimits,
      menus: ["stock", "lorem"],
    },
    {
      name: "finance",
      icon: FaMoneyBillTransfer,
      menus: ["income", "debt"],
    },
  ];

  return (
    <div>
      <div
        className={`md:hidden inset-0 z-[998] fixed max-h-screen bg-black/30 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <motion.div
        variants={Sidebar_animation}
        initial={{ x: isTab ? -300 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className="h-screen pt-20 bg-primary text-secondary flex flex-col gap-4 px-4 z-[999] w-[16rem] max-w-[16rem] overflow-hidden md:relative fixed"
      >
        {/* Logo */}
        <div className="flex items-center gap-4 border-b-2 border-secondary pb-4">
          <img
            src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-cashier-sales-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
            alt="Logo"
            width={40}
          />
          <span className="text-3xl font-semibold whitespace-pre">CASHIER</span>
        </div>

        {/* Menus */}
        <div className="flex flex-col h-full">
          {/* first */}
          <ul className="whitespace-pre flex flex-col gap-2 overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 h-[70%] md:max-h-[68%]">
            <li>
              <NavLink to="/dashboard" className={"link"}>
                <TbLayoutDashboardFilled size={28} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>

            {/* with submenu */}
            {(isOpen || isTab) && (
              <div className="border-y-2 py-5 border-secondary">
                <p className="pl-3 text-secondary inline-block mb-2">
                  Product categories
                </p>
                {subMenuList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
          </ul>

          {/* second */}
          {/* {isOpen && (
            <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
              <div className="flex items-center justify-between border-y-2 border-secondary p-4">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p>Upgrade</p>
              </div>
            </div>
          )} */}
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
                  x: -4,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{
            duration: 0,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-4 bottom-2 md:block hidden"
        >
          <FaAngleLeft size={25} />
        </motion.button>

        {/* <a
          href="/dashboard"
          className=""
        >
          <TbLayoutDashboardFilled />
          <span className="font-semibold">Dashboard</span>
        </a> */}
      </motion.div>
      <div
        className="md:hidden bg-secondary shadow-lg p-4 rounded-full absolute bottom-4 left-4"
        onClick={() => setIsOpen(true)}
      >
        <RiSidebarUnfoldFill size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
