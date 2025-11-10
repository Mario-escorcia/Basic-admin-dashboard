import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

export const ItemComponent = () => {
  return (
    <Item className="bg-white border border-[1px solid #fafafa] w-full p-2  hover:bg-gray-10  0 cursor-pointer" tabIndex={1}>
      {/* <ItemHeader>Item Header</ItemHeader> */}
      <ItemContent className="flex flex-row gap-2 justify-between">
        <ItemTitle>Mario Escorcia</ItemTitle>
        <ItemDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, harum!</ItemDescription>
        <ItemDescription>Lorem ipsum, dolor sit amet!</ItemDescription>
        <ItemDescription>Lorem ipsum, dolor sit amet elit. Reiciendis, harum!</ItemDescription>

      </ItemContent>
    </Item>
  );
};
