import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { onLCP, onINP, onCLS } from "web-vitals";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./pages/Auth/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={App} />
    </AuthProvider>
  </React.StrictMode>
);

onCLS(console.log);
onINP(console.log);
onLCP(console.log);
