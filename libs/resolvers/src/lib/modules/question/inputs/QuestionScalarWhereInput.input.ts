import * as NestJsGraphQL from "@nestjs/graphql";
import { EnumQuestionTypeFilter } from "../../common/inputs/EnumQuestionTypeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { StringNullableListFilter } from "../../common/inputs/StringNullableListFilter.input";

@NestJsGraphQL.InputType('QuestionScalarWhereInput', { isAbstract: true })
export class QuestionScalarWhereInput {
  @NestJsGraphQL.Field(() => [QuestionScalarWhereInput], { nullable: true })
  AND?: QuestionScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionScalarWhereInput], { nullable: true })
  OR?: QuestionScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionScalarWhereInput], { nullable: true })
  NOT?: QuestionScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  pageId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => EnumQuestionTypeFilter, { nullable: true })
  type?: EnumQuestionTypeFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  text?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableListFilter, { nullable: true })
  choices?: StringNullableListFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  nextPageId?: IntNullableFilter | undefined;
}
