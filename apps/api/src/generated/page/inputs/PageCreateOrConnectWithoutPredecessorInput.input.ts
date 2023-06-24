import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateWithoutPredecessorInput } from "../../page/inputs/PageCreateWithoutPredecessorInput.input";
import { PageWhereUniqueInput } from "../../page/inputs/PageWhereUniqueInput.input";

@NestJsGraphQL.InputType('PageCreateOrConnectWithoutPredecessorInput', { isAbstract: true })
export class PageCreateOrConnectWithoutPredecessorInput {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;

  @NestJsGraphQL.Field(() => PageCreateWithoutPredecessorInput)
  create!: PageCreateWithoutPredecessorInput;
}
