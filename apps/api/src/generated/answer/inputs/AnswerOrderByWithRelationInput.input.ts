import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { QuestionOrderByWithRelationInput } from "../../question/inputs/QuestionOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('AnswerOrderByWithRelationInput', { isAbstract: true })
export class AnswerOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  questionId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => QuestionOrderByWithRelationInput, { nullable: true })
  Question?: QuestionOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  answers?: "asc" | "desc" | undefined;
}
