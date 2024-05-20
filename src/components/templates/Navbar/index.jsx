import { Link } from "react-router-dom";
import List from "./List";
import { AuthContext } from "../../../pages/Auth/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const links = ["home", "about", "contact"];

  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="w-full shadow-md fixed z-[9999]">
      <ul className="p-4 flex bg-primary text-secondary justify-start gap-4 items-center">
        <Link to={`/`} className="text-2xl font-bold">
          CASHIER
        </Link>
        <div className="flex h-full justify-between items-center w-full">
          <div className="flex gap-2 h-full items-center">
            {links.map((link, index) => (
              <List key={index} href={link} style="hover:text-white" />
            ))}
          </div>
          {isLoggedIn ? (
            <div className="flex gap-2">
              <List href="dashboard" style="hover:text-white" />
              <button onClick={logout} className="hover:text-white">
                Logout
              </button>
            </div>
          ) : (
            <>
              <List
                href={`login`}
                style="py-2 px-4 border border-black rounded-md hover:text-white hover:border-white"
              />
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
