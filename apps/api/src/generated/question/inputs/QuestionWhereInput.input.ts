import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerRelationFilter } from "../../answer/inputs/AnswerRelationFilter.input";
import { EnumQuestionTypeFilter } from "../../common/inputs/EnumQuestionTypeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { StringNullableListFilter } from "../../common/inputs/StringNullableListFilter.input";
import { PageRelationFilter } from "../../page/inputs/PageRelationFilter.input";

@NestJsGraphQL.InputType('QuestionWhereInput', { isAbstract: true })
export class QuestionWhereInput {
  @NestJsGraphQL.Field(() => [QuestionWhereInput], { nullable: true })
  AND?: QuestionWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionWhereInput], { nullable: true })
  OR?: QuestionWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionWhereInput], { nullable: true })
  NOT?: QuestionWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => PageRelationFilter, { nullable: true })
  page?: PageRelationFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  pageId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => EnumQuestionTypeFilter, { nullable: true })
  type?: EnumQuestionTypeFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  text?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableListFilter, { nullable: true })
  choices?: StringNullableListFilter | undefined;

  @NestJsGraphQL.Field(() => AnswerRelationFilter, { nullable: true })
  answer?: AnswerRelationFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  nextPageId?: IntNullableFilter | undefined;
}
