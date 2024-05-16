import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "postLookup";

export const CommentTitle = (record: TComment): string => {
  return record.postLookup?.toString() || String(record.id);
};
