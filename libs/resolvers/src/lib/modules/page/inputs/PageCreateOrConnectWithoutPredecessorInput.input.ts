import * as NestJsGraphQL from '@nestjs/graphql';
import { PageCreateWithoutPredecessorInput } from './PageCreateWithoutPredecessorInput.input';
import { PageWhereUniqueInput } from './PageWhereUniqueInput.input';

@NestJsGraphQL.InputType('PageCreateOrConnectWithoutPredecessorInput', {
  isAbstract: true,
})
export class PageCreateOrConnectWithoutPredecessorInput {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;

  @NestJsGraphQL.Field(() => PageCreateWithoutPredecessorInput)
  create!: PageCreateWithoutPredecessorInput;
}
