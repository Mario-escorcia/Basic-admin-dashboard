import { ItemComponent } from "@/shared/components/Item/UsersItem";

export const Home = () => {
  const users = Array.from({ length: 40 }, (_, i) => i + 1); 

  return (
    <div className="flex flex-col gap-2  h-full w-full">
      <div className="h-6">
        <h3 className="text-[#414141] font-bold text-xl">New Users</h3>
      </div>
      <div className="flex flex-col gap-1 flex-1 overflow-y-auto ">
        {users.map((_, idx) => (
          <ItemComponent key={idx} />
        ))}
      </div>
    </div>
  );
};
