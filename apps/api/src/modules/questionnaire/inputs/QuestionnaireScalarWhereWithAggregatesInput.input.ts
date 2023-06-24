import * as NestJsGraphQL from "@nestjs/graphql";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('QuestionnaireScalarWhereWithAggregatesInput', { isAbstract: true })
export class QuestionnaireScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [QuestionnaireScalarWhereWithAggregatesInput], { nullable: true })
  AND?: QuestionnaireScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionnaireScalarWhereWithAggregatesInput], { nullable: true })
  OR?: QuestionnaireScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionnaireScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: QuestionnaireScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;
}
