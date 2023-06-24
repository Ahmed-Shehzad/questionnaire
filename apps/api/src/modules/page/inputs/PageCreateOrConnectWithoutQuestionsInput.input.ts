import * as NestJsGraphQL from '@nestjs/graphql';
import { PageCreateWithoutQuestionsInput } from './PageCreateWithoutQuestionsInput.input';
import { PageWhereUniqueInput } from './PageWhereUniqueInput.input';

@NestJsGraphQL.InputType('PageCreateOrConnectWithoutQuestionsInput', {
  isAbstract: true,
})
export class PageCreateOrConnectWithoutQuestionsInput {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;

  @NestJsGraphQL.Field(() => PageCreateWithoutQuestionsInput)
  create!: PageCreateWithoutQuestionsInput;
}
