import { Comment } from "../comment/Comment";
import { Post } from "../post/Post";
import { Role } from "../role/Role";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  posts?: Array<Post>;
  role?: Role | null;
  updatedAt: Date;
  username: string | null;
};
