import { createBrowserRouter } from "react-router";
import { LayoutComponent } from "@/components/Layout/LayoutComponent";
import { Home } from "@/components/home/Home";

export const routes = createBrowserRouter([
    {
        path : "/app",
        element : <LayoutComponent></LayoutComponent>,
        children : [
            {
                index : true , element : <Home></Home>
            },
        ]
    }
])