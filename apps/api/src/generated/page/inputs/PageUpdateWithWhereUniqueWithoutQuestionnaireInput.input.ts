import * as NestJsGraphQL from "@nestjs/graphql";
import { PageUpdateWithoutQuestionnaireInput } from "../../page/inputs/PageUpdateWithoutQuestionnaireInput.input";
import { PageWhereUniqueInput } from "../../page/inputs/PageWhereUniqueInput.input";

@NestJsGraphQL.InputType('PageUpdateWithWhereUniqueWithoutQuestionnaireInput', { isAbstract: true })
export class PageUpdateWithWhereUniqueWithoutQuestionnaireInput {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;

  @NestJsGraphQL.Field(() => PageUpdateWithoutQuestionnaireInput)
  data!: PageUpdateWithoutQuestionnaireInput;
}
