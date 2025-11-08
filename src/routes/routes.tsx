import { createBrowserRouter } from "react-router";
import { LayoutComponent } from "@/components/Layout/LayoutComponent";

export const routes = createBrowserRouter([
    {
        path : "/",
        element : <LayoutComponent></LayoutComponent>
    }
])