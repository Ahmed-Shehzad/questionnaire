import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateWithoutQuestionnaireInput } from "../../page/inputs/PageCreateWithoutQuestionnaireInput.input";
import { PageUpdateWithoutQuestionnaireInput } from "../../page/inputs/PageUpdateWithoutQuestionnaireInput.input";
import { PageWhereUniqueInput } from "../../page/inputs/PageWhereUniqueInput.input";

@NestJsGraphQL.InputType('PageUpsertWithWhereUniqueWithoutQuestionnaireInput', { isAbstract: true })
export class PageUpsertWithWhereUniqueWithoutQuestionnaireInput {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;

  @NestJsGraphQL.Field(() => PageUpdateWithoutQuestionnaireInput)
  update!: PageUpdateWithoutQuestionnaireInput;

  @NestJsGraphQL.Field(() => PageCreateWithoutQuestionnaireInput)
  create!: PageCreateWithoutQuestionnaireInput;
}
