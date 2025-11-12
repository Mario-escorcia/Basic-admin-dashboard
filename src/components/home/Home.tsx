import { getComentSvc } from "@/services/adminServices";
import { ItemComponent } from "@/shared/components/Item/UsersItem";
import { useEffect, useState } from "react";

export const Home = () => {
  const [comments, setComments] = useState([]);
  const getDataList = async () => {
    let request = await getComentSvc()
    if(request.status === 200){
      setComments(request.data)
    }
  }
  useEffect(()=>{
    getDataList()
  } , [])
  return (
    <div className="flex flex-col gap-2  h-full w-full">
      <div className="h-6">
        <h3 className="text-[#414141] font-bold text-xl">New Users</h3>
      </div>
      <div className="flex flex-col gap-1 flex-1 overflow-y-auto ">
        {comments.map((comment, idx) => (
          <ItemComponent key={idx} data={comment} />
        ))}
      </div>
    </div>
  );
};
