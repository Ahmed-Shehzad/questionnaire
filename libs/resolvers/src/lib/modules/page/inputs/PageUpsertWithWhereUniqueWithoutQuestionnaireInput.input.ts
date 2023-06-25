import * as NestJsGraphQL from '@nestjs/graphql';
import { PageCreateWithoutQuestionnaireInput } from './PageCreateWithoutQuestionnaireInput.input';
import { PageUpdateWithoutQuestionnaireInput } from './PageUpdateWithoutQuestionnaireInput.input';
import { PageWhereUniqueInput } from './PageWhereUniqueInput.input';

@NestJsGraphQL.InputType('PageUpsertWithWhereUniqueWithoutQuestionnaireInput', {
  isAbstract: true,
})
export class PageUpsertWithWhereUniqueWithoutQuestionnaireInput {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;

  @NestJsGraphQL.Field(() => PageUpdateWithoutQuestionnaireInput)
  update!: PageUpdateWithoutQuestionnaireInput;

  @NestJsGraphQL.Field(() => PageCreateWithoutQuestionnaireInput)
  create!: PageCreateWithoutQuestionnaireInput;
}
