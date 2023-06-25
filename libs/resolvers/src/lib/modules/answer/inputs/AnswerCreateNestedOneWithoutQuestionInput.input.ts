import * as NestJsGraphQL from '@nestjs/graphql';
import { AnswerCreateOrConnectWithoutQuestionInput } from './AnswerCreateOrConnectWithoutQuestionInput.input';
import { AnswerCreateWithoutQuestionInput } from './AnswerCreateWithoutQuestionInput.input';
import { AnswerWhereUniqueInput } from './AnswerWhereUniqueInput.input';

@NestJsGraphQL.InputType('AnswerCreateNestedOneWithoutQuestionInput', {
  isAbstract: true,
})
export class AnswerCreateNestedOneWithoutQuestionInput {
  @NestJsGraphQL.Field(() => AnswerCreateWithoutQuestionInput, {
    nullable: true,
  })
  create?: AnswerCreateWithoutQuestionInput | undefined;

  @NestJsGraphQL.Field(() => AnswerCreateOrConnectWithoutQuestionInput, {
    nullable: true,
  })
  connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | undefined;

  @NestJsGraphQL.Field(() => AnswerWhereUniqueInput, { nullable: true })
  connect?: AnswerWhereUniqueInput | undefined;
}
