import { getComentSvc, getSpecificComment } from "@/services/adminServices";
import { ItemComponent } from "@/shared/components/Item/UsersItem";
import type { commentType } from "@/types/types";
import { useLoaderData } from "react-router";

export const getDataList = async () => {
  let request = await getComentSvc();
  if (request.status === 200) {
    return request.data;
  } else {
    throw new Error("Error fetching data");
  }
};
  
  export const selectComment = async (postId : number) => {
    let request = await getSpecificComment(postId);
    if (request.status === 200) {
      console.log(request.data , "hello")
      return request.data;
    }
  }

export const Home = () => {
  const comments = useLoaderData() as commentType[];

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
        {comments.map((comment, idx) => (
          <ItemComponent key={idx} data={comment} getComment={selectComment} />
        ))}
      </div>
    </div>
  );
};
