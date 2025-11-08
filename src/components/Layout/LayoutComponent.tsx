import { Outlet } from "react-router"
import { NavbarComponent } from "../../shared/components/Navbar/NavbarComponent"

export const LayoutComponent = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
        <NavbarComponent></NavbarComponent>
        <div className="w-full h-full p-2">
            <Outlet></Outlet>
        </div>
    </div>
  )
}
