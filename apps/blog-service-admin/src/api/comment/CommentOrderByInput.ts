import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  postLookup?: SortOrder;
  postRelation?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userLookup?: SortOrder;
  userRelation?: SortOrder;
};
