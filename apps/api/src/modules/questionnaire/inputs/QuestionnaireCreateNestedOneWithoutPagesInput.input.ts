import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionnaireCreateOrConnectWithoutPagesInput } from './QuestionnaireCreateOrConnectWithoutPagesInput.input';
import { QuestionnaireCreateWithoutPagesInput } from './QuestionnaireCreateWithoutPagesInput.input';
import { QuestionnaireWhereUniqueInput } from './QuestionnaireWhereUniqueInput.input';

@NestJsGraphQL.InputType('QuestionnaireCreateNestedOneWithoutPagesInput', {
  isAbstract: true,
})
export class QuestionnaireCreateNestedOneWithoutPagesInput {
  @NestJsGraphQL.Field(() => QuestionnaireCreateWithoutPagesInput, {
    nullable: true,
  })
  create?: QuestionnaireCreateWithoutPagesInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireCreateOrConnectWithoutPagesInput, {
    nullable: true,
  })
  connectOrCreate?: QuestionnaireCreateOrConnectWithoutPagesInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireWhereUniqueInput, { nullable: true })
  connect?: QuestionnaireWhereUniqueInput | undefined;
}
