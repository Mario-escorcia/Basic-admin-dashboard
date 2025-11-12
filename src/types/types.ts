export type commentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type itemsProps = {
    data : commentType;
}
