import * as NestJsGraphQL from "@nestjs/graphql";

export enum QuestionnaireScalarFieldEnum {
  id = "id",
  name = "name"
}
NestJsGraphQL.registerEnumType(QuestionnaireScalarFieldEnum, {
  name: "QuestionnaireScalarFieldEnum",
  description: undefined,
});

export enum PageScalarFieldEnum {
  id = "id",
  title = "title",
  questionnaireId = "questionnaireId",
  predecessorId = "predecessorId"
}
NestJsGraphQL.registerEnumType(PageScalarFieldEnum, {
  name: "PageScalarFieldEnum",
  description: undefined,
});

export enum QuestionScalarFieldEnum {
  id = "id",
  pageId = "pageId",
  type = "type",
  text = "text",
  choices = "choices",
  nextPageId = "nextPageId"
}
NestJsGraphQL.registerEnumType(QuestionScalarFieldEnum, {
  name: "QuestionScalarFieldEnum",
  description: undefined,
});

export enum AnswerScalarFieldEnum {
  id = "id",
  questionId = "questionId",
  answers = "answers"
}
NestJsGraphQL.registerEnumType(AnswerScalarFieldEnum, {
  name: "AnswerScalarFieldEnum",
  description: undefined,
});

export enum SortOrder {
  asc = "asc",
  desc = "desc"
}
NestJsGraphQL.registerEnumType(SortOrder, {
  name: "SortOrder",
  description: undefined,
});

export enum QueryMode {
  "default" = "default",
  insensitive = "insensitive"
}
NestJsGraphQL.registerEnumType(QueryMode, {
  name: "QueryMode",
  description: undefined,
});
