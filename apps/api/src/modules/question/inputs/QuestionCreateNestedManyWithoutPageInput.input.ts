import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionCreateManyPageInputEnvelope } from './QuestionCreateManyPageInputEnvelope.input';
import { QuestionCreateOrConnectWithoutPageInput } from './QuestionCreateOrConnectWithoutPageInput.input';
import { QuestionCreateWithoutPageInput } from './QuestionCreateWithoutPageInput.input';
import { QuestionWhereUniqueInput } from './QuestionWhereUniqueInput.input';

@NestJsGraphQL.InputType('QuestionCreateNestedManyWithoutPageInput', {
  isAbstract: true,
})
export class QuestionCreateNestedManyWithoutPageInput {
  @NestJsGraphQL.Field(() => [QuestionCreateWithoutPageInput], {
    nullable: true,
  })
  create?: QuestionCreateWithoutPageInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionCreateOrConnectWithoutPageInput], {
    nullable: true,
  })
  connectOrCreate?: QuestionCreateOrConnectWithoutPageInput[] | undefined;

  @NestJsGraphQL.Field(() => QuestionCreateManyPageInputEnvelope, {
    nullable: true,
  })
  createMany?: QuestionCreateManyPageInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [QuestionWhereUniqueInput], { nullable: true })
  connect?: QuestionWhereUniqueInput[] | undefined;
}
