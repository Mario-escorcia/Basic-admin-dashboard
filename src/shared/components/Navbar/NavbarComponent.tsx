import { useLocalStorage } from "@/hooks/useLocalStorage"
import { AvatarComponent } from "../AvatarComponent/AvatarComponent"
import { useState } from "react"

export const NavbarComponent = () => {
 const [userData , setUserData] = useState(()=>{
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : {};
 })

  return (
    <div className="w-full h-12 px-4 flex items-center justify-between border-b border-[1px solid #FAFAFA]">
        <h4>App name</h4>
        <div className="flex gap-4 items-center">
            <p className="hover:underline cursor-pointer">Home</p>
            <p className="hover:underline cursor-pointer">Messages</p>
            <p className="hover:underline cursor-pointer capitalize font-semibold text-teal-700">{userData?.name}</p>
            <AvatarComponent></AvatarComponent>
        </div>
    </div>
  )
}
