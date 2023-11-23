import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./layout/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import App from "./pages/App.jsx";
import Page404 from "./pages/Page404.jsx";
import "./Home.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/App",
        element: <App />,
      },
      // {
      // 	path: "your path",
      // 	element: <Your components />,
      // },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
