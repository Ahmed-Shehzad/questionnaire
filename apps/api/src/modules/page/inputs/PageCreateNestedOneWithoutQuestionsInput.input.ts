import * as NestJsGraphQL from '@nestjs/graphql';
import { PageCreateOrConnectWithoutQuestionsInput } from './PageCreateOrConnectWithoutQuestionsInput.input';
import { PageCreateWithoutQuestionsInput } from './PageCreateWithoutQuestionsInput.input';
import { PageWhereUniqueInput } from './PageWhereUniqueInput.input';

@NestJsGraphQL.InputType('PageCreateNestedOneWithoutQuestionsInput', {
  isAbstract: true,
})
export class PageCreateNestedOneWithoutQuestionsInput {
  @NestJsGraphQL.Field(() => PageCreateWithoutQuestionsInput, {
    nullable: true,
  })
  create?: PageCreateWithoutQuestionsInput | undefined;

  @NestJsGraphQL.Field(() => PageCreateOrConnectWithoutQuestionsInput, {
    nullable: true,
  })
  connectOrCreate?: PageCreateOrConnectWithoutQuestionsInput | undefined;

  @NestJsGraphQL.Field(() => PageWhereUniqueInput, { nullable: true })
  connect?: PageWhereUniqueInput | undefined;
}
