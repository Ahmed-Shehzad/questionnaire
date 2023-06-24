import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateWithoutQuestionnaireInput } from "../../page/inputs/PageCreateWithoutQuestionnaireInput.input";
import { PageWhereUniqueInput } from "../../page/inputs/PageWhereUniqueInput.input";

@NestJsGraphQL.InputType('PageCreateOrConnectWithoutQuestionnaireInput', { isAbstract: true })
export class PageCreateOrConnectWithoutQuestionnaireInput {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;

  @NestJsGraphQL.Field(() => PageCreateWithoutQuestionnaireInput)
  create!: PageCreateWithoutQuestionnaireInput;
}
