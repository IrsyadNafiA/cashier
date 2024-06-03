import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/templates/Navbar";

const Home = () => {
  return (
    <div className="h-screen linear-background">
      <Navbar />
      <div className="flex items-center justify-center h-screen w-full">
        <div className="font-black text-6xl text-center uppercase">
          <h1 className="text-secondary">Welcome to Cashier</h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "",
              500,
              "W",
              500,
              "Wa",
              500,
              "War",
              500,
              "Warung",
              500,
              "Warung Irs",
              500,
              "Warung Irsyad",
              500,
            ]}
            speed={50}
            className="text-yellow-300"
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
