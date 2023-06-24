import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionCreateWithoutAnswerInput } from "../../question/inputs/QuestionCreateWithoutAnswerInput.input";
import { QuestionUpdateWithoutAnswerInput } from "../../question/inputs/QuestionUpdateWithoutAnswerInput.input";

@NestJsGraphQL.InputType('QuestionUpsertWithoutAnswerInput', { isAbstract: true })
export class QuestionUpsertWithoutAnswerInput {
  @NestJsGraphQL.Field(() => QuestionUpdateWithoutAnswerInput)
  update!: QuestionUpdateWithoutAnswerInput;

  @NestJsGraphQL.Field(() => QuestionCreateWithoutAnswerInput)
  create!: QuestionCreateWithoutAnswerInput;
}
