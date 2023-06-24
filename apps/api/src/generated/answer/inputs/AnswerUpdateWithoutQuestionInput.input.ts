import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerUpdateanswersInput } from "../../answer/inputs/AnswerUpdateanswersInput.input";

@NestJsGraphQL.InputType('AnswerUpdateWithoutQuestionInput', { isAbstract: true })
export class AnswerUpdateWithoutQuestionInput {
  @NestJsGraphQL.Field(() => AnswerUpdateanswersInput, { nullable: true })
  answers?: AnswerUpdateanswersInput | undefined;
}
