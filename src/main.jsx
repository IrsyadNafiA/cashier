import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { onLCP, onINP, onCLS } from "web-vitals";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>
);

onCLS(console.log);
onINP(console.log);
onLCP(console.log);
