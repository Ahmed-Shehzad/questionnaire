import * as NestJsGraphQL from "@nestjs/graphql";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringNullableListFilter } from "../../common/inputs/StringNullableListFilter.input";

@NestJsGraphQL.InputType('AnswerScalarWhereWithAggregatesInput', { isAbstract: true })
export class AnswerScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [AnswerScalarWhereWithAggregatesInput], { nullable: true })
  AND?: AnswerScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [AnswerScalarWhereWithAggregatesInput], { nullable: true })
  OR?: AnswerScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [AnswerScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: AnswerScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  questionId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableListFilter, { nullable: true })
  answers?: StringNullableListFilter | undefined;
}
