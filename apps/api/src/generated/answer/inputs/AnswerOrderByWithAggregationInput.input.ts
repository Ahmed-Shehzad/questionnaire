import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerAvgOrderByAggregateInput } from "../../answer/inputs/AnswerAvgOrderByAggregateInput.input";
import { AnswerCountOrderByAggregateInput } from "../../answer/inputs/AnswerCountOrderByAggregateInput.input";
import { AnswerMaxOrderByAggregateInput } from "../../answer/inputs/AnswerMaxOrderByAggregateInput.input";
import { AnswerMinOrderByAggregateInput } from "../../answer/inputs/AnswerMinOrderByAggregateInput.input";
import { AnswerSumOrderByAggregateInput } from "../../answer/inputs/AnswerSumOrderByAggregateInput.input";
import { SortOrder } from "../../common/enums";

@NestJsGraphQL.InputType('AnswerOrderByWithAggregationInput', { isAbstract: true })
export class AnswerOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  questionId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  answers?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => AnswerCountOrderByAggregateInput, { nullable: true })
  _count?: AnswerCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => AnswerAvgOrderByAggregateInput, { nullable: true })
  _avg?: AnswerAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => AnswerMaxOrderByAggregateInput, { nullable: true })
  _max?: AnswerMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => AnswerMinOrderByAggregateInput, { nullable: true })
  _min?: AnswerMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => AnswerSumOrderByAggregateInput, { nullable: true })
  _sum?: AnswerSumOrderByAggregateInput | undefined;
}
