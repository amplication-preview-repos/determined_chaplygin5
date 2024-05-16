import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  category?: CategoryWhereUniqueInput;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  publishedAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
