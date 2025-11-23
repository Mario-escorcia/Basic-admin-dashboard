import { createBrowserRouter } from "react-router";
import { LayoutComponent } from "@/components/Layout/LayoutComponent";
import { getDataList, Home } from "@/components/home/Home";
import { Login } from "@/components/login/Login";
import { SpecificCommentsComponent } from "@/components/SpecificComments/SpecificCommentsComponent";

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
        loader: getDataList,
        errorElement: <div className="h-full w-full flex items-center justify-center text-lg text-indigo-600">Error loading data</div>,
      },
      {
        path: "messages/:msgId",
        element : <SpecificCommentsComponent></SpecificCommentsComponent>,

      }
    ],
  },
]);
