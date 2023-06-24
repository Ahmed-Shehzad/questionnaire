import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionCreateOrConnectWithoutAnswerInput } from './QuestionCreateOrConnectWithoutAnswerInput.input';
import { QuestionCreateWithoutAnswerInput } from './QuestionCreateWithoutAnswerInput.input';
import { QuestionWhereUniqueInput } from './QuestionWhereUniqueInput.input';

@NestJsGraphQL.InputType('QuestionCreateNestedOneWithoutAnswerInput', {
  isAbstract: true,
})
export class QuestionCreateNestedOneWithoutAnswerInput {
  @NestJsGraphQL.Field(() => QuestionCreateWithoutAnswerInput, {
    nullable: true,
  })
  create?: QuestionCreateWithoutAnswerInput | undefined;

  @NestJsGraphQL.Field(() => QuestionCreateOrConnectWithoutAnswerInput, {
    nullable: true,
  })
  connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput | undefined;

  @NestJsGraphQL.Field(() => QuestionWhereUniqueInput, { nullable: true })
  connect?: QuestionWhereUniqueInput | undefined;
}
