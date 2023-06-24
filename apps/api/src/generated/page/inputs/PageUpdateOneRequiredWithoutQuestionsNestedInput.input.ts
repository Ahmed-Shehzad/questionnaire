import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateOrConnectWithoutQuestionsInput } from "../../page/inputs/PageCreateOrConnectWithoutQuestionsInput.input";
import { PageCreateWithoutQuestionsInput } from "../../page/inputs/PageCreateWithoutQuestionsInput.input";
import { PageUpdateWithoutQuestionsInput } from "../../page/inputs/PageUpdateWithoutQuestionsInput.input";
import { PageUpsertWithoutQuestionsInput } from "../../page/inputs/PageUpsertWithoutQuestionsInput.input";
import { PageWhereUniqueInput } from "../../page/inputs/PageWhereUniqueInput.input";

@NestJsGraphQL.InputType('PageUpdateOneRequiredWithoutQuestionsNestedInput', { isAbstract: true })
export class PageUpdateOneRequiredWithoutQuestionsNestedInput {
  @NestJsGraphQL.Field(() => PageCreateWithoutQuestionsInput, { nullable: true })
  create?: PageCreateWithoutQuestionsInput | undefined;

  @NestJsGraphQL.Field(() => PageCreateOrConnectWithoutQuestionsInput, { nullable: true })
  connectOrCreate?: PageCreateOrConnectWithoutQuestionsInput | undefined;

  @NestJsGraphQL.Field(() => PageUpsertWithoutQuestionsInput, { nullable: true })
  upsert?: PageUpsertWithoutQuestionsInput | undefined;

  @NestJsGraphQL.Field(() => PageWhereUniqueInput, { nullable: true })
  connect?: PageWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => PageUpdateWithoutQuestionsInput, { nullable: true })
  update?: PageUpdateWithoutQuestionsInput | undefined;
}
