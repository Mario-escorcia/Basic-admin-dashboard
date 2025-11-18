import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import type { itemsProps } from "@/types/types";

export const ItemComponent = ({ data , getComment}: itemsProps) => {


  return (
    <Item
      className="bg-white border border-[1px solid #fafafa] w-full p-2  hover:bg-gray-100 cursor-pointer"
      tabIndex={1}
      onClick={()=> getComment(data.postId)}
    >
      {/* <ItemHeader>Item Header</ItemHeader> */}
      <ItemContent className="flex flex-row gap-2 justify-between min-w-0">
        <ItemTitle className="truncate whitespace-nowrap overflow-hidden w-[20%] shrink-0 flex items-center">
          {data.name}
        </ItemTitle>
        <ItemDescription className="truncate whitespace-nowrap overflow-hidden w-[15%] shrink-0 flex items-center">
          {data.email}
        </ItemDescription>
        <ItemDescription
          className="shrink-0 flex items-center"
          style={{
            width: "60%",
            maxWidth : "60%",
            overflow : "hidden",
            textOverflow : "ellipsis",
            whiteSpace : "nowrap", 
          }}
        >
          {data.body}
        </ItemDescription>
      </ItemContent>
    </Item>
  );
};
