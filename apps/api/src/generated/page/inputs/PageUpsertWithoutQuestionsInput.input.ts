import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateWithoutQuestionsInput } from "../../page/inputs/PageCreateWithoutQuestionsInput.input";
import { PageUpdateWithoutQuestionsInput } from "../../page/inputs/PageUpdateWithoutQuestionsInput.input";

@NestJsGraphQL.InputType('PageUpsertWithoutQuestionsInput', { isAbstract: true })
export class PageUpsertWithoutQuestionsInput {
  @NestJsGraphQL.Field(() => PageUpdateWithoutQuestionsInput)
  update!: PageUpdateWithoutQuestionsInput;

  @NestJsGraphQL.Field(() => PageCreateWithoutQuestionsInput)
  create!: PageCreateWithoutQuestionsInput;
}
