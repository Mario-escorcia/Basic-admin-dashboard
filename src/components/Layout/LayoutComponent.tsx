import { Outlet } from "react-router"
import { NavbarComponent } from "../../shared/components/Navbar/NavbarComponent"

export const LayoutComponent = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
        <NavbarComponent></NavbarComponent>
    <div className="w-full flex-1 px-2 min-h-0">
      <Outlet></Outlet>
    </div>
    </div>
  )
}
