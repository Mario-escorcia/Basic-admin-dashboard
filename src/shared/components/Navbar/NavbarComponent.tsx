import { AvatarComponent } from "../AvatarComponent/AvatarComponent"

export const NavbarComponent = () => {
  return (
    <div className="w-full h-12 p-2 flex items-center justify-between border-b border-[1px solid #FAFAFA]">
        <h4>App name</h4>
        <div className="flex gap-4 items-center">
            <p className="hover:underline cursor-pointer">Home</p>
            <p className="hover:underline cursor-pointer">Users</p>
            <p className="hover:underline cursor-pointer">Settings</p>
            <AvatarComponent></AvatarComponent>
        </div>
    </div>
  )
}
