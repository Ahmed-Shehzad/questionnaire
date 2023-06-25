import * as NestJsGraphQL from '@nestjs/graphql';
import { PageCreateWithoutPredecessorInput } from './PageCreateWithoutPredecessorInput.input';
import { PageUpdateWithoutPredecessorInput } from './PageUpdateWithoutPredecessorInput.input';

@NestJsGraphQL.InputType('PageUpsertWithoutPredecessorInput', {
  isAbstract: true,
})
export class PageUpsertWithoutPredecessorInput {
  @NestJsGraphQL.Field(() => PageUpdateWithoutPredecessorInput)
  update!: PageUpdateWithoutPredecessorInput;

  @NestJsGraphQL.Field(() => PageCreateWithoutPredecessorInput)
  create!: PageCreateWithoutPredecessorInput;
}
