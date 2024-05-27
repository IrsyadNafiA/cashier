import { Link } from "react-router-dom";
import List from "./List"; // Pastikan Anda memiliki komponen List
import { AuthContext } from "../../../pages/Auth/AuthContext"; // Sesuaikan path ini sesuai dengan struktur proyek Anda
import { useContext, useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const links = ["home", "about", "contact"];

  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
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

  return (
    <nav className="w-full shadow-md fixed z-[9999]">
      <div
        className={`md:hidden inset-0 z-[998] fixed max-h-screen bg-transparent ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <ul className="p-4 flex bg-primary text-secondary justify-between gap-4 items-center">
        <Link to="/" className="text-2xl font-bold">
          CASHIER
        </Link>
        <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IoMenu size={30} />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 z-[99999] bg-primary/70 flex-col pb-2 md:pb-0 md:static md:flex md:flex-row md:bg-transparent md:h-full h-auto justify-between items-center w-full gap-2"
            >
              <div className="flex md:flex-row flex-col gap-2 h-full items-center">
                {links.map((link, index) => (
                  <List key={index} href={link} style="hover:text-white" />
                ))}
              </div>
              {isLoggedIn ? (
                <div className="flex gap-2 md:flex md:flex-row flex-col items-center md:mt-0 mt-2">
                  <List href="dashboard" style="hover:text-white" />
                  <button onClick={logout} className="hover:text-white">
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <List
                    href="login"
                    style="py-2 px-4 border border-black rounded-md hover:text-white hover:border-white"
                  />
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </nav>
  );
};

export default Navbar;
