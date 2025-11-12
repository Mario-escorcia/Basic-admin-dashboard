import { createBrowserRouter } from "react-router";
import { LayoutComponent } from "@/components/Layout/LayoutComponent";
import { Home } from "@/components/home/Home";
import { Login } from "@/components/login/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/app",
    element: <LayoutComponent></LayoutComponent>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
