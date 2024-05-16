import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type Post = {
  category?: Category | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  publishedAt: Date | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
