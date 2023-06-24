import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionType } from "../../enums/QuestionType.enum";
import { NestedEnumQuestionTypeFilter } from "./NestedEnumQuestionTypeFilter.input";
import { NestedEnumQuestionTypeWithAggregatesFilter } from "./NestedEnumQuestionTypeWithAggregatesFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";

@NestJsGraphQL.InputType('EnumQuestionTypeWithAggregatesFilter', { isAbstract: true })
export class EnumQuestionTypeWithAggregatesFilter {
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
