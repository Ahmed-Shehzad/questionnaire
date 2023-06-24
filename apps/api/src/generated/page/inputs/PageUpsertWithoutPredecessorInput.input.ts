import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateWithoutPredecessorInput } from "../../page/inputs/PageCreateWithoutPredecessorInput.input";
import { PageUpdateWithoutPredecessorInput } from "../../page/inputs/PageUpdateWithoutPredecessorInput.input";

@NestJsGraphQL.InputType('PageUpsertWithoutPredecessorInput', { isAbstract: true })
export class PageUpsertWithoutPredecessorInput {
  @NestJsGraphQL.Field(() => PageUpdateWithoutPredecessorInput)
  update!: PageUpdateWithoutPredecessorInput;

  @NestJsGraphQL.Field(() => PageCreateWithoutPredecessorInput)
  create!: PageCreateWithoutPredecessorInput;
}
