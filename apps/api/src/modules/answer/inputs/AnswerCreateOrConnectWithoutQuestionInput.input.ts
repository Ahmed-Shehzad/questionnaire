import * as NestJsGraphQL from '@nestjs/graphql';
import { AnswerCreateWithoutQuestionInput } from './AnswerCreateWithoutQuestionInput.input';
import { AnswerWhereUniqueInput } from './AnswerWhereUniqueInput.input';

@NestJsGraphQL.InputType('AnswerCreateOrConnectWithoutQuestionInput', {
  isAbstract: true,
})
export class AnswerCreateOrConnectWithoutQuestionInput {
  @NestJsGraphQL.Field(() => AnswerWhereUniqueInput)
  where!: AnswerWhereUniqueInput;

  @NestJsGraphQL.Field(() => AnswerCreateWithoutQuestionInput)
  create!: AnswerCreateWithoutQuestionInput;
}
