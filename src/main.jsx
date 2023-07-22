import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/news",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/catalogs",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/*",
    element: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
