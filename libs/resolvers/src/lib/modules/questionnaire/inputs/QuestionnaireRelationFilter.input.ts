import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionnaireWhereInput } from './QuestionnaireWhereInput.input';

@NestJsGraphQL.InputType('QuestionnaireRelationFilter', { isAbstract: true })
export class QuestionnaireRelationFilter {
  @NestJsGraphQL.Field(() => QuestionnaireWhereInput, { nullable: true })
  is?: QuestionnaireWhereInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireWhereInput, { nullable: true })
  isNot?: QuestionnaireWhereInput | undefined;
}
