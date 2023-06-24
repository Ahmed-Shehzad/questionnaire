import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateOrConnectWithoutSuccessorInput } from "../../page/inputs/PageCreateOrConnectWithoutSuccessorInput.input";
import { PageCreateWithoutSuccessorInput } from "../../page/inputs/PageCreateWithoutSuccessorInput.input";
import { PageWhereUniqueInput } from "../../page/inputs/PageWhereUniqueInput.input";

@NestJsGraphQL.InputType('PageCreateNestedOneWithoutSuccessorInput', { isAbstract: true })
export class PageCreateNestedOneWithoutSuccessorInput {
  @NestJsGraphQL.Field(() => PageCreateWithoutSuccessorInput, { nullable: true })
  create?: PageCreateWithoutSuccessorInput | undefined;

  @NestJsGraphQL.Field(() => PageCreateOrConnectWithoutSuccessorInput, { nullable: true })
  connectOrCreate?: PageCreateOrConnectWithoutSuccessorInput | undefined;

  @NestJsGraphQL.Field(() => PageWhereUniqueInput, { nullable: true })
  connect?: PageWhereUniqueInput | undefined;
}
