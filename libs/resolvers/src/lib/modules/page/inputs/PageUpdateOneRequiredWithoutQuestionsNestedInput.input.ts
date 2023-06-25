import * as NestJsGraphQL from '@nestjs/graphql';
import { PageCreateOrConnectWithoutQuestionsInput } from './PageCreateOrConnectWithoutQuestionsInput.input';
import { PageCreateWithoutQuestionsInput } from './PageCreateWithoutQuestionsInput.input';
import { PageUpdateWithoutQuestionsInput } from './PageUpdateWithoutQuestionsInput.input';
import { PageUpsertWithoutQuestionsInput } from './PageUpsertWithoutQuestionsInput.input';
import { PageWhereUniqueInput } from './PageWhereUniqueInput.input';

@NestJsGraphQL.InputType('PageUpdateOneRequiredWithoutQuestionsNestedInput', {
  isAbstract: true,
})
export class PageUpdateOneRequiredWithoutQuestionsNestedInput {
  @NestJsGraphQL.Field(() => PageCreateWithoutQuestionsInput, {
    nullable: true,
  })
  create?: PageCreateWithoutQuestionsInput | undefined;

  @NestJsGraphQL.Field(() => PageCreateOrConnectWithoutQuestionsInput, {
    nullable: true,
  })
  connectOrCreate?: PageCreateOrConnectWithoutQuestionsInput | undefined;

  @NestJsGraphQL.Field(() => PageUpsertWithoutQuestionsInput, {
    nullable: true,
  })
  upsert?: PageUpsertWithoutQuestionsInput | undefined;

  @NestJsGraphQL.Field(() => PageWhereUniqueInput, { nullable: true })
  connect?: PageWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => PageUpdateWithoutQuestionsInput, {
    nullable: true,
  })
  update?: PageUpdateWithoutQuestionsInput | undefined;
}
