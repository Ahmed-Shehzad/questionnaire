import * as NestJsGraphQL from '@nestjs/graphql';
import { IntFilter } from '../../common/inputs/IntFilter.input';
import { IntNullableFilter } from '../../common/inputs/IntNullableFilter.input';
import { StringFilter } from '../../common/inputs/StringFilter.input';
import { QuestionListRelationFilter } from '../../question/inputs/QuestionListRelationFilter.input';
import { QuestionnaireRelationFilter } from '../../questionnaire/inputs/QuestionnaireRelationFilter.input';
import { PageRelationFilter } from './PageRelationFilter.input';

@NestJsGraphQL.InputType('PageWhereInput', { isAbstract: true })
export class PageWhereInput {
  @NestJsGraphQL.Field(() => [PageWhereInput], { nullable: true })
  AND?: PageWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PageWhereInput], { nullable: true })
  OR?: PageWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PageWhereInput], { nullable: true })
  NOT?: PageWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => QuestionListRelationFilter, { nullable: true })
  questions?: QuestionListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireRelationFilter, { nullable: true })
  questionnaire?: QuestionnaireRelationFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  questionnaireId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => PageRelationFilter, { nullable: true })
  successor?: PageRelationFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  predecessorId?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => PageRelationFilter, { nullable: true })
  predecessor?: PageRelationFilter | undefined;
}
