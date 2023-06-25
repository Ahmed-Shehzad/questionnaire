import * as NestJsGraphQL from '@nestjs/graphql';
import { AnswerCreateWithoutQuestionInput } from './AnswerCreateWithoutQuestionInput.input';
import { AnswerUpdateWithoutQuestionInput } from './AnswerUpdateWithoutQuestionInput.input';

@NestJsGraphQL.InputType('AnswerUpsertWithoutQuestionInput', {
  isAbstract: true,
})
export class AnswerUpsertWithoutQuestionInput {
  @NestJsGraphQL.Field(() => AnswerUpdateWithoutQuestionInput)
  update!: AnswerUpdateWithoutQuestionInput;

  @NestJsGraphQL.Field(() => AnswerCreateWithoutQuestionInput)
  create!: AnswerCreateWithoutQuestionInput;
}
