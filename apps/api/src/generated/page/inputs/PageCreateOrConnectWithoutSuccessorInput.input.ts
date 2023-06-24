import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateWithoutSuccessorInput } from "../../page/inputs/PageCreateWithoutSuccessorInput.input";
import { PageWhereUniqueInput } from "../../page/inputs/PageWhereUniqueInput.input";

@NestJsGraphQL.InputType('PageCreateOrConnectWithoutSuccessorInput', { isAbstract: true })
export class PageCreateOrConnectWithoutSuccessorInput {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;

  @NestJsGraphQL.Field(() => PageCreateWithoutSuccessorInput)
  create!: PageCreateWithoutSuccessorInput;
}
