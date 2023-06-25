import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionCreateWithoutPageInput } from './QuestionCreateWithoutPageInput.input';
import { QuestionWhereUniqueInput } from './QuestionWhereUniqueInput.input';

@NestJsGraphQL.InputType('QuestionCreateOrConnectWithoutPageInput', {
  isAbstract: true,
})
export class QuestionCreateOrConnectWithoutPageInput {
  @NestJsGraphQL.Field(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;

  @NestJsGraphQL.Field(() => QuestionCreateWithoutPageInput)
  create!: QuestionCreateWithoutPageInput;
}
