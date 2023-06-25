import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionScalarWhereInput } from './QuestionScalarWhereInput.input';
import { QuestionUpdateManyMutationInput } from './QuestionUpdateManyMutationInput.input';

@NestJsGraphQL.InputType('QuestionUpdateManyWithWhereWithoutPageInput', {
  isAbstract: true,
})
export class QuestionUpdateManyWithWhereWithoutPageInput {
  @NestJsGraphQL.Field(() => QuestionScalarWhereInput)
  where!: QuestionScalarWhereInput;

  @NestJsGraphQL.Field(() => QuestionUpdateManyMutationInput)
  data!: QuestionUpdateManyMutationInput;
}
