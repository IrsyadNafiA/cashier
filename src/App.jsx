import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./components/templates/Layouts";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Auth";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard";
import TestingForm from "./pages/testingForm";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/testingform",
    element: <TestingForm />,
  },
]);

export default App;
