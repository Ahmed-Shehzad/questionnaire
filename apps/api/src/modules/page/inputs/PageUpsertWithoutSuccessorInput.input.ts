import * as NestJsGraphQL from '@nestjs/graphql';
import { PageCreateWithoutSuccessorInput } from './PageCreateWithoutSuccessorInput.input';
import { PageUpdateWithoutSuccessorInput } from './PageUpdateWithoutSuccessorInput.input';

@NestJsGraphQL.InputType('PageUpsertWithoutSuccessorInput', {
  isAbstract: true,
})
export class PageUpsertWithoutSuccessorInput {
  @NestJsGraphQL.Field(() => PageUpdateWithoutSuccessorInput)
  update!: PageUpdateWithoutSuccessorInput;

  @NestJsGraphQL.Field(() => PageCreateWithoutSuccessorInput)
  create!: PageCreateWithoutSuccessorInput;
}
