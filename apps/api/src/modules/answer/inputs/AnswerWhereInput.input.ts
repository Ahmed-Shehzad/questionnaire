import * as NestJsGraphQL from "@nestjs/graphql";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringNullableListFilter } from "../../common/inputs/StringNullableListFilter.input";
import { QuestionRelationFilter } from "../../question/inputs/QuestionRelationFilter.input";

@NestJsGraphQL.InputType('AnswerWhereInput', { isAbstract: true })
export class AnswerWhereInput {
  @NestJsGraphQL.Field(() => [AnswerWhereInput], { nullable: true })
  AND?: AnswerWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [AnswerWhereInput], { nullable: true })
  OR?: AnswerWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [AnswerWhereInput], { nullable: true })
  NOT?: AnswerWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  questionId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => QuestionRelationFilter, { nullable: true })
  Question?: QuestionRelationFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableListFilter, { nullable: true })
  answers?: StringNullableListFilter | undefined;
}
