import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  post?: PostWhereUniqueInput | null;
  postLookup?: string | null;
  postRelation?: string | null;
  user?: UserWhereUniqueInput | null;
  userLookup?: string | null;
  userRelation?: string | null;
};
