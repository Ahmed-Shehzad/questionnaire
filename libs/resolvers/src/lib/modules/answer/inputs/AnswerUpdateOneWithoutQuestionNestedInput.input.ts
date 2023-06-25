import * as NestJsGraphQL from '@nestjs/graphql';
import { AnswerCreateOrConnectWithoutQuestionInput } from './AnswerCreateOrConnectWithoutQuestionInput.input';
import { AnswerCreateWithoutQuestionInput } from './AnswerCreateWithoutQuestionInput.input';
import { AnswerUpdateWithoutQuestionInput } from './AnswerUpdateWithoutQuestionInput.input';
import { AnswerUpsertWithoutQuestionInput } from './AnswerUpsertWithoutQuestionInput.input';
import { AnswerWhereUniqueInput } from './AnswerWhereUniqueInput.input';

@NestJsGraphQL.InputType('AnswerUpdateOneWithoutQuestionNestedInput', {
  isAbstract: true,
})
export class AnswerUpdateOneWithoutQuestionNestedInput {
  @NestJsGraphQL.Field(() => AnswerCreateWithoutQuestionInput, {
    nullable: true,
  })
  create?: AnswerCreateWithoutQuestionInput | undefined;

  @NestJsGraphQL.Field(() => AnswerCreateOrConnectWithoutQuestionInput, {
    nullable: true,
  })
  connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | undefined;

  @NestJsGraphQL.Field(() => AnswerUpsertWithoutQuestionInput, {
    nullable: true,
  })
  upsert?: AnswerUpsertWithoutQuestionInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => AnswerWhereUniqueInput, { nullable: true })
  connect?: AnswerWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => AnswerUpdateWithoutQuestionInput, {
    nullable: true,
  })
  update?: AnswerUpdateWithoutQuestionInput | undefined;
}
