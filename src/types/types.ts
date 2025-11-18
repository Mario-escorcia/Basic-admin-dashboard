export type commentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type itemsProps = {
    data : commentType;
    getComment : (postId : number) => void;
}


export type useLocalstorageType<T> ={
  key: string;
  initialValue: T;
}

export type userRegisteredType = {
  id: number;
  name: string;
  email: string;
}