import { Post } from "../post/Post";
import { User } from "../user/User";

export type Comment = {
  content: string | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  postLookup: string | null;
  postRelation: string | null;
  updatedAt: Date;
  user?: User | null;
  userLookup: string | null;
  userRelation: string | null;
};
