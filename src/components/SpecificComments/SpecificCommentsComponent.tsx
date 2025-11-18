
export const SpecificCommentsComponent = () => {
  return (
     <div className="flex flex-col gap-2  h-full w-full">
       <div className="h-8  flex items-center  px-4 border-b border-gray-300">
         <h3 className="text-[#414141] font-bold text-xl">Users Messages</h3>
       </div>
       <div className="flex gap-2 px-4">
         <p className="w-[22%] font-semibold text-sm">Name</p>
         <p className="w-[17%] font-semibold text-sm">Email</p>
         <p className="font-semibold  text-sm">Message</p>
       </div>
       <div className="flex flex-col gap-1 flex-1 overflow-y-auto ">
        cards here...
       </div>
     </div>
   );
}
