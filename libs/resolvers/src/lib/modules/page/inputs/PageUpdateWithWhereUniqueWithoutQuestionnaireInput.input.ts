import * as NestJsGraphQL from '@nestjs/graphql';
import { PageUpdateWithoutQuestionnaireInput } from './PageUpdateWithoutQuestionnaireInput.input';
import { PageWhereUniqueInput } from './PageWhereUniqueInput.input';

@NestJsGraphQL.InputType('PageUpdateWithWhereUniqueWithoutQuestionnaireInput', {
  isAbstract: true,
})
export class PageUpdateWithWhereUniqueWithoutQuestionnaireInput {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;

  @NestJsGraphQL.Field(() => PageUpdateWithoutQuestionnaireInput)
  data!: PageUpdateWithoutQuestionnaireInput;
}
