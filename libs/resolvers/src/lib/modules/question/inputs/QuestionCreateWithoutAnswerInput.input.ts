import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionType } from '../../enums/QuestionType.enum';
import { PageCreateNestedOneWithoutQuestionsInput } from '../../page/inputs/PageCreateNestedOneWithoutQuestionsInput.input';
import { QuestionCreatechoicesInput } from './QuestionCreatechoicesInput.input';

@NestJsGraphQL.InputType('QuestionCreateWithoutAnswerInput', {
  isAbstract: true,
})
export class QuestionCreateWithoutAnswerInput {
  @NestJsGraphQL.Field(() => PageCreateNestedOneWithoutQuestionsInput)
  page!: PageCreateNestedOneWithoutQuestionsInput;

  @NestJsGraphQL.Field(() => QuestionType)
  type!: 'TEXT' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';

  @NestJsGraphQL.Field(() => String)
  text!: string;

  @NestJsGraphQL.Field(() => QuestionCreatechoicesInput, { nullable: true })
  choices?: QuestionCreatechoicesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  nextPageId?: number | undefined;
}
