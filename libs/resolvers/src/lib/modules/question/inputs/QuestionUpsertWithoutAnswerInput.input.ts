import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionCreateWithoutAnswerInput } from './QuestionCreateWithoutAnswerInput.input';
import { QuestionUpdateWithoutAnswerInput } from './QuestionUpdateWithoutAnswerInput.input';

@NestJsGraphQL.InputType('QuestionUpsertWithoutAnswerInput', {
  isAbstract: true,
})
export class QuestionUpsertWithoutAnswerInput {
  @NestJsGraphQL.Field(() => QuestionUpdateWithoutAnswerInput)
  update!: QuestionUpdateWithoutAnswerInput;

  @NestJsGraphQL.Field(() => QuestionCreateWithoutAnswerInput)
  create!: QuestionCreateWithoutAnswerInput;
}
