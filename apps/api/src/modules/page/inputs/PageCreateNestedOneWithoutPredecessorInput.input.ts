import * as NestJsGraphQL from '@nestjs/graphql';
import { PageCreateOrConnectWithoutPredecessorInput } from './PageCreateOrConnectWithoutPredecessorInput.input';
import { PageCreateWithoutPredecessorInput } from './PageCreateWithoutPredecessorInput.input';
import { PageWhereUniqueInput } from './PageWhereUniqueInput.input';

@NestJsGraphQL.InputType('PageCreateNestedOneWithoutPredecessorInput', {
  isAbstract: true,
})
export class PageCreateNestedOneWithoutPredecessorInput {
  @NestJsGraphQL.Field(() => PageCreateWithoutPredecessorInput, {
    nullable: true,
  })
  create?: PageCreateWithoutPredecessorInput | undefined;

  @NestJsGraphQL.Field(() => PageCreateOrConnectWithoutPredecessorInput, {
    nullable: true,
  })
  connectOrCreate?: PageCreateOrConnectWithoutPredecessorInput | undefined;

  @NestJsGraphQL.Field(() => PageWhereUniqueInput, { nullable: true })
  connect?: PageWhereUniqueInput | undefined;
}
