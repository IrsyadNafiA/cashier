import { Link } from "react-router-dom";
import List from "./List";

const Navbar = () => {
  const links = ["home", "about", "contact"];

  return (
    <nav className="w-full">
      <ul className="p-4 flex bg-lime-400 justify-start gap-4 items-center">
        <Link to={`/`} className="text-2xl font-bold">
          CASHIER
        </Link>
        <div className="flex h-full justify-between items-center w-full">
          <div className="flex gap-2 h-full items-center">
            {links.map((link, index) => (
              <List key={index} href={link} style="hover:text-white" />
            ))}
          </div>
          <List
            href={`login`}
            style="py-2 px-4 border border-black rounded-md hover:text-white hover:border-white"
          />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
