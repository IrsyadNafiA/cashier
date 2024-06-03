import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./components/templates/Layouts";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Auth";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard";
import TestingForm from "./pages/testingForm";
import Product from "./pages/Dashboard/Product";
import Finance from "./pages/Dashboard/Finance";

// Auth
import withAuth from "./components/utilities/HOC/withAuth";

const AuthenticatedDashboard = withAuth(Dashboard);
const AuthenticatedProduct = withAuth(Product);
const AuthenticatedFinance = withAuth(Finance);

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
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    element: <Layouts />,
    children: [
      {
        path: "/dashboard",
        element: <AuthenticatedDashboard />,
      },
      {
        path: "/product/:pID",
        element: <AuthenticatedProduct />,
      },
      {
        path: "/finance/:fID",
        element: <AuthenticatedFinance />,
      },
    ],
  },
  {
    path: "/testingform",
    element: <TestingForm />,
  },
]);

export default App;
