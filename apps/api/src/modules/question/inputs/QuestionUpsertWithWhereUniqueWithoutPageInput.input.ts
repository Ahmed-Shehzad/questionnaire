import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionCreateWithoutPageInput } from './QuestionCreateWithoutPageInput.input';
import { QuestionUpdateWithoutPageInput } from './QuestionUpdateWithoutPageInput.input';
import { QuestionWhereUniqueInput } from './QuestionWhereUniqueInput.input';

@NestJsGraphQL.InputType('QuestionUpsertWithWhereUniqueWithoutPageInput', {
  isAbstract: true,
})
export class QuestionUpsertWithWhereUniqueWithoutPageInput {
  @NestJsGraphQL.Field(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;

  @NestJsGraphQL.Field(() => QuestionUpdateWithoutPageInput)
  update!: QuestionUpdateWithoutPageInput;

  @NestJsGraphQL.Field(() => QuestionCreateWithoutPageInput)
  create!: QuestionCreateWithoutPageInput;
}
