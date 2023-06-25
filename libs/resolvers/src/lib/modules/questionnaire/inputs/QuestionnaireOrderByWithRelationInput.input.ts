import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { PageOrderByRelationAggregateInput } from "../../page/inputs/PageOrderByRelationAggregateInput.input";

@NestJsGraphQL.InputType('QuestionnaireOrderByWithRelationInput', { isAbstract: true })
export class QuestionnaireOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PageOrderByRelationAggregateInput, { nullable: true })
  pages?: PageOrderByRelationAggregateInput | undefined;
}
