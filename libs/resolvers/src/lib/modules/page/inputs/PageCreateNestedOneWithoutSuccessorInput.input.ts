import * as NestJsGraphQL from '@nestjs/graphql';
import { PageCreateOrConnectWithoutSuccessorInput } from './PageCreateOrConnectWithoutSuccessorInput.input';
import { PageCreateWithoutSuccessorInput } from './PageCreateWithoutSuccessorInput.input';
import { PageWhereUniqueInput } from './PageWhereUniqueInput.input';

@NestJsGraphQL.InputType('PageCreateNestedOneWithoutSuccessorInput', {
  isAbstract: true,
})
export class PageCreateNestedOneWithoutSuccessorInput {
  @NestJsGraphQL.Field(() => PageCreateWithoutSuccessorInput, {
    nullable: true,
  })
  create?: PageCreateWithoutSuccessorInput | undefined;

  @NestJsGraphQL.Field(() => PageCreateOrConnectWithoutSuccessorInput, {
    nullable: true,
  })
  connectOrCreate?: PageCreateOrConnectWithoutSuccessorInput | undefined;

  @NestJsGraphQL.Field(() => PageWhereUniqueInput, { nullable: true })
  connect?: PageWhereUniqueInput | undefined;
}
