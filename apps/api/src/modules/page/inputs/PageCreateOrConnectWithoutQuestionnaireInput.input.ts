import * as NestJsGraphQL from '@nestjs/graphql';
import { PageCreateWithoutQuestionnaireInput } from './PageCreateWithoutQuestionnaireInput.input';
import { PageWhereUniqueInput } from './PageWhereUniqueInput.input';

@NestJsGraphQL.InputType('PageCreateOrConnectWithoutQuestionnaireInput', {
  isAbstract: true,
})
export class PageCreateOrConnectWithoutQuestionnaireInput {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;

  @NestJsGraphQL.Field(() => PageCreateWithoutQuestionnaireInput)
  create!: PageCreateWithoutQuestionnaireInput;
}
