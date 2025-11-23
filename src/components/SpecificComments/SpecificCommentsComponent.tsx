import { getSpecificComment } from "@/services/adminServices";
import type { commentType } from "@/types/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const SpecificCommentsComponent = () => {
  const params = useParams();
  const messageId = params.msgId;
  const [list, setList] = useState<commentType[]>([]);

  const selectComment = async () => {
    let request = await getSpecificComment(parseInt(messageId as string));
    if (request.status === 200) {
      console.log(request.data, "hello");
      setList(request.data);
    }
  };

  useEffect(() => {
    selectComment();
  }, [messageId]);
  return (
    <div className="flex flex-col gap-2  h-full w-full mt-4">
      <div
        className=" gap-1 flex-1 overflow-y-auto grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] 
"
      >
        {list.map((item) => {
          return (
            <Card
              className="w-full h-[20rem] flex justify-between"
              key={item.id}
            >
              <CardHeader>
                <CardTitle className="flex gap-2 text-sm items-start px-2">
                  <p>Name:</p>{" "}
                  <p className="font-medium opacity-90">{item.name}</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.body}</CardDescription>
              </CardContent>
              <CardFooter className="flex-col gap-2 px-2  items-start">
                <CardDescription className="align-start">
                  <strong>Email:</strong> {item.email}
                </CardDescription>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
