import { motion } from "framer-motion";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <li
        className={`link ${pathname.includes(data.name) && "text-yellow-300"}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        {/* Dyinamic icons */}
        <data.icon size={28} className="min-w-max" />
        <p className="capitalize flex-1">{data.name}</p>
        <FaAngleDown
          className={`${subMenuOpen && "rotate-180"} duration-200`}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex flex-col pl-14 overflow-hidden h-0"
      >
        {data.menus.map((menu) => (
          <li key={menu}>
            <NavLink
              to={`/${data.name}/${menu}`}
              className="link !bg-transparent capitalize"
            >
              {menu}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
