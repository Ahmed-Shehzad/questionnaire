import * as NestJsGraphQL from "@nestjs/graphql";
import { EnumQuestionTypeWithAggregatesFilter } from "../../common/inputs/EnumQuestionTypeWithAggregatesFilter.input";
import { IntNullableWithAggregatesFilter } from "../../common/inputs/IntNullableWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringNullableListFilter } from "../../common/inputs/StringNullableListFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('QuestionScalarWhereWithAggregatesInput', { isAbstract: true })
export class QuestionScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [QuestionScalarWhereWithAggregatesInput], { nullable: true })
  AND?: QuestionScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionScalarWhereWithAggregatesInput], { nullable: true })
  OR?: QuestionScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: QuestionScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  pageId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => EnumQuestionTypeWithAggregatesFilter, { nullable: true })
  type?: EnumQuestionTypeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  text?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableListFilter, { nullable: true })
  choices?: StringNullableListFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  nextPageId?: IntNullableWithAggregatesFilter | undefined;
}
