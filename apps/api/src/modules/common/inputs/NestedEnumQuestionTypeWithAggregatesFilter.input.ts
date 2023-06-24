import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionType } from "../../enums/QuestionType.enum";
import { NestedEnumQuestionTypeFilter } from "./NestedEnumQuestionTypeFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";

@NestJsGraphQL.InputType('NestedEnumQuestionTypeWithAggregatesFilter', { isAbstract: true })
export class NestedEnumQuestionTypeWithAggregatesFilter {
  @NestJsGraphQL.Field(() => QuestionType, { nullable: true })
  equals?: "TEXT" | "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | undefined;

  @NestJsGraphQL.Field(() => [QuestionType], { nullable: true })
  in?: Array<"TEXT" | "SINGLE_CHOICE" | "MULTIPLE_CHOICE"> | undefined;

  @NestJsGraphQL.Field(() => [QuestionType], { nullable: true })
  notIn?: Array<"TEXT" | "SINGLE_CHOICE" | "MULTIPLE_CHOICE"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumQuestionTypeWithAggregatesFilter, { nullable: true })
  not?: NestedEnumQuestionTypeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumQuestionTypeFilter, { nullable: true })
  _min?: NestedEnumQuestionTypeFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumQuestionTypeFilter, { nullable: true })
  _max?: NestedEnumQuestionTypeFilter | undefined;
}
