import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionnaireCreateWithoutPagesInput } from './QuestionnaireCreateWithoutPagesInput.input';
import { QuestionnaireWhereUniqueInput } from './QuestionnaireWhereUniqueInput.input';

@NestJsGraphQL.InputType('QuestionnaireCreateOrConnectWithoutPagesInput', {
  isAbstract: true,
})
export class QuestionnaireCreateOrConnectWithoutPagesInput {
  @NestJsGraphQL.Field(() => QuestionnaireWhereUniqueInput)
  where!: QuestionnaireWhereUniqueInput;

  @NestJsGraphQL.Field(() => QuestionnaireCreateWithoutPagesInput)
  create!: QuestionnaireCreateWithoutPagesInput;
}
