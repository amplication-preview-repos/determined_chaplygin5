import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserWhereInput = {
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  posts?: PostListRelationFilter;
  role?: RoleWhereUniqueInput;
  username?: StringNullableFilter;
};
