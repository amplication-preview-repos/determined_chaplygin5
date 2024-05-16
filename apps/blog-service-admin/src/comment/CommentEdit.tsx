import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PostTitle } from "../post/PostTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="post.id" reference="Post" label="Post">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
        <TextInput label="postLookup" source="postLookup" />
        <TextInput label="postRelation" source="postRelation" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="userLookup" source="userLookup" />
        <TextInput label="userRelation" source="userRelation" />
      </SimpleForm>
    </Edit>
  );
};
