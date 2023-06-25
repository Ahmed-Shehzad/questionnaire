import * as NestJsGraphQL from "@nestjs/graphql";

export enum QuestionType {
  TEXT = "TEXT",
  SINGLE_CHOICE = "SINGLE_CHOICE",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE"
}
NestJsGraphQL.registerEnumType(QuestionType, {
  name: "QuestionType",
  description: undefined,
});
