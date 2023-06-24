import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionnaireCreateWithoutPagesInput } from "../../questionnaire/inputs/QuestionnaireCreateWithoutPagesInput.input";
import { QuestionnaireWhereUniqueInput } from "../../questionnaire/inputs/QuestionnaireWhereUniqueInput.input";

@NestJsGraphQL.InputType('QuestionnaireCreateOrConnectWithoutPagesInput', { isAbstract: true })
export class QuestionnaireCreateOrConnectWithoutPagesInput {
  @NestJsGraphQL.Field(() => QuestionnaireWhereUniqueInput)
  where!: QuestionnaireWhereUniqueInput;

  @NestJsGraphQL.Field(() => QuestionnaireCreateWithoutPagesInput)
  create!: QuestionnaireCreateWithoutPagesInput;
}
