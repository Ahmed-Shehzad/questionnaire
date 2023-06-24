import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { QuestionOrderByRelationAggregateInput } from "../../question/inputs/QuestionOrderByRelationAggregateInput.input";
import { QuestionnaireOrderByWithRelationInput } from "../../questionnaire/inputs/QuestionnaireOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('PageOrderByWithRelationInput', { isAbstract: true })
export class PageOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => QuestionOrderByRelationAggregateInput, { nullable: true })
  questions?: QuestionOrderByRelationAggregateInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireOrderByWithRelationInput, { nullable: true })
  questionnaire?: QuestionnaireOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  questionnaireId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PageOrderByWithRelationInput, { nullable: true })
  successor?: PageOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  predecessorId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PageOrderByWithRelationInput, { nullable: true })
  predecessor?: PageOrderByWithRelationInput | undefined;
}
