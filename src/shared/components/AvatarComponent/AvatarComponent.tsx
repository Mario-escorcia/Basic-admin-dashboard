import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarComponent() {
  return (
    <div className="flex items-center cursor-pointer">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" title="User Icon"/>
        <AvatarFallback>ME</AvatarFallback>
      </Avatar>
      
      
    </div>
  )
}
