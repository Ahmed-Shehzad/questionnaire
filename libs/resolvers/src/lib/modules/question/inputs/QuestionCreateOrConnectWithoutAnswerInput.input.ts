import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionCreateWithoutAnswerInput } from './QuestionCreateWithoutAnswerInput.input';
import { QuestionWhereUniqueInput } from './QuestionWhereUniqueInput.input';

@NestJsGraphQL.InputType('QuestionCreateOrConnectWithoutAnswerInput', {
  isAbstract: true,
})
export class QuestionCreateOrConnectWithoutAnswerInput {
  @NestJsGraphQL.Field(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;

  @NestJsGraphQL.Field(() => QuestionCreateWithoutAnswerInput)
  create!: QuestionCreateWithoutAnswerInput;
}
