import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  postLookup?: StringNullableFilter;
  postRelation?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  userLookup?: StringNullableFilter;
  userRelation?: StringNullableFilter;
};
