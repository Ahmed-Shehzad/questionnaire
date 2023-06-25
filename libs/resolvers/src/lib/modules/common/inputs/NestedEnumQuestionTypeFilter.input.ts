import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionType } from "../../enums/QuestionType.enum";

@NestJsGraphQL.InputType('NestedEnumQuestionTypeFilter', { isAbstract: true })
export class NestedEnumQuestionTypeFilter {
  @NestJsGraphQL.Field(() => QuestionType, { nullable: true })
  equals?: "TEXT" | "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | undefined;

  @NestJsGraphQL.Field(() => [QuestionType], { nullable: true })
  in?: Array<"TEXT" | "SINGLE_CHOICE" | "MULTIPLE_CHOICE"> | undefined;

  @NestJsGraphQL.Field(() => [QuestionType], { nullable: true })
  notIn?: Array<"TEXT" | "SINGLE_CHOICE" | "MULTIPLE_CHOICE"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumQuestionTypeFilter, { nullable: true })
  not?: NestedEnumQuestionTypeFilter | undefined;
}
