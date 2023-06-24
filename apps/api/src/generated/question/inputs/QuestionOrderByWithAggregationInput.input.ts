import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { QuestionAvgOrderByAggregateInput } from "../../question/inputs/QuestionAvgOrderByAggregateInput.input";
import { QuestionCountOrderByAggregateInput } from "../../question/inputs/QuestionCountOrderByAggregateInput.input";
import { QuestionMaxOrderByAggregateInput } from "../../question/inputs/QuestionMaxOrderByAggregateInput.input";
import { QuestionMinOrderByAggregateInput } from "../../question/inputs/QuestionMinOrderByAggregateInput.input";
import { QuestionSumOrderByAggregateInput } from "../../question/inputs/QuestionSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('QuestionOrderByWithAggregationInput', { isAbstract: true })
export class QuestionOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  pageId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  type?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  text?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  choices?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  nextPageId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => QuestionCountOrderByAggregateInput, { nullable: true })
  _count?: QuestionCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => QuestionAvgOrderByAggregateInput, { nullable: true })
  _avg?: QuestionAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => QuestionMaxOrderByAggregateInput, { nullable: true })
  _max?: QuestionMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => QuestionMinOrderByAggregateInput, { nullable: true })
  _min?: QuestionMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => QuestionSumOrderByAggregateInput, { nullable: true })
  _sum?: QuestionSumOrderByAggregateInput | undefined;
}
