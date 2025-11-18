import type { useLocalstorageType } from "@/types/types";
import { useEffect, useState } from "react"

export const useLocalStorage = <T>({key , initialValue}: useLocalstorageType<T>) => {
  const [value , setValue] = useState<T>(()=>{
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });
  useEffect(()=>{

   localStorage.setItem(key , JSON.stringify(value))

  },[value  , key])

  return [value , setValue] as const;
}
