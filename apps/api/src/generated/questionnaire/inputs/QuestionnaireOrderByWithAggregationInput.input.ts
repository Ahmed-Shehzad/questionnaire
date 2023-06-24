import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { QuestionnaireAvgOrderByAggregateInput } from "../../questionnaire/inputs/QuestionnaireAvgOrderByAggregateInput.input";
import { QuestionnaireCountOrderByAggregateInput } from "../../questionnaire/inputs/QuestionnaireCountOrderByAggregateInput.input";
import { QuestionnaireMaxOrderByAggregateInput } from "../../questionnaire/inputs/QuestionnaireMaxOrderByAggregateInput.input";
import { QuestionnaireMinOrderByAggregateInput } from "../../questionnaire/inputs/QuestionnaireMinOrderByAggregateInput.input";
import { QuestionnaireSumOrderByAggregateInput } from "../../questionnaire/inputs/QuestionnaireSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('QuestionnaireOrderByWithAggregationInput', { isAbstract: true })
export class QuestionnaireOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireCountOrderByAggregateInput, { nullable: true })
  _count?: QuestionnaireCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireAvgOrderByAggregateInput, { nullable: true })
  _avg?: QuestionnaireAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireMaxOrderByAggregateInput, { nullable: true })
  _max?: QuestionnaireMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireMinOrderByAggregateInput, { nullable: true })
  _min?: QuestionnaireMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireSumOrderByAggregateInput, { nullable: true })
  _sum?: QuestionnaireSumOrderByAggregateInput | undefined;
}
