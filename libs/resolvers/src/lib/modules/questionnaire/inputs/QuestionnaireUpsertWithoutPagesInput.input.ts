import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionnaireCreateWithoutPagesInput } from './QuestionnaireCreateWithoutPagesInput.input';
import { QuestionnaireUpdateWithoutPagesInput } from './QuestionnaireUpdateWithoutPagesInput.input';

@NestJsGraphQL.InputType('QuestionnaireUpsertWithoutPagesInput', {
  isAbstract: true,
})
export class QuestionnaireUpsertWithoutPagesInput {
  @NestJsGraphQL.Field(() => QuestionnaireUpdateWithoutPagesInput)
  update!: QuestionnaireUpdateWithoutPagesInput;

  @NestJsGraphQL.Field(() => QuestionnaireCreateWithoutPagesInput)
  create!: QuestionnaireCreateWithoutPagesInput;
}
