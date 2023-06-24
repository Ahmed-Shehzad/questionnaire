import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateWithoutQuestionsInput } from "../../page/inputs/PageCreateWithoutQuestionsInput.input";
import { PageWhereUniqueInput } from "../../page/inputs/PageWhereUniqueInput.input";

@NestJsGraphQL.InputType('PageCreateOrConnectWithoutQuestionsInput', { isAbstract: true })
export class PageCreateOrConnectWithoutQuestionsInput {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;

  @NestJsGraphQL.Field(() => PageCreateWithoutQuestionsInput)
  create!: PageCreateWithoutQuestionsInput;
}
