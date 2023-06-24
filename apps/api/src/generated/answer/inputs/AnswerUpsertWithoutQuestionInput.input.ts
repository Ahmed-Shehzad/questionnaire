import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerCreateWithoutQuestionInput } from "../../answer/inputs/AnswerCreateWithoutQuestionInput.input";
import { AnswerUpdateWithoutQuestionInput } from "../../answer/inputs/AnswerUpdateWithoutQuestionInput.input";

@NestJsGraphQL.InputType('AnswerUpsertWithoutQuestionInput', { isAbstract: true })
export class AnswerUpsertWithoutQuestionInput {
  @NestJsGraphQL.Field(() => AnswerUpdateWithoutQuestionInput)
  update!: AnswerUpdateWithoutQuestionInput;

  @NestJsGraphQL.Field(() => AnswerCreateWithoutQuestionInput)
  create!: AnswerCreateWithoutQuestionInput;
}
