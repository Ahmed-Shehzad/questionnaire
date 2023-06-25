import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionWhereInput } from './QuestionWhereInput.input';

@NestJsGraphQL.InputType('QuestionRelationFilter', { isAbstract: true })
export class QuestionRelationFilter {
  @NestJsGraphQL.Field(() => QuestionWhereInput, { nullable: true })
  is?: QuestionWhereInput | undefined;

  @NestJsGraphQL.Field(() => QuestionWhereInput, { nullable: true })
  isNot?: QuestionWhereInput | undefined;
}
