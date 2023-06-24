import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionnaireCreateWithoutPagesInput } from "../../questionnaire/inputs/QuestionnaireCreateWithoutPagesInput.input";
import { QuestionnaireUpdateWithoutPagesInput } from "../../questionnaire/inputs/QuestionnaireUpdateWithoutPagesInput.input";

@NestJsGraphQL.InputType('QuestionnaireUpsertWithoutPagesInput', { isAbstract: true })
export class QuestionnaireUpsertWithoutPagesInput {
  @NestJsGraphQL.Field(() => QuestionnaireUpdateWithoutPagesInput)
  update!: QuestionnaireUpdateWithoutPagesInput;

  @NestJsGraphQL.Field(() => QuestionnaireCreateWithoutPagesInput)
  create!: QuestionnaireCreateWithoutPagesInput;
}
