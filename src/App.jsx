import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./components/templates/Layouts";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    element: <Layouts />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default App;
