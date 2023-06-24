import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerCreateanswersInput } from "../../answer/inputs/AnswerCreateanswersInput.input";

@NestJsGraphQL.InputType('AnswerCreateWithoutQuestionInput', { isAbstract: true })
export class AnswerCreateWithoutQuestionInput {
  @NestJsGraphQL.Field(() => AnswerCreateanswersInput, { nullable: true })
  answers?: AnswerCreateanswersInput | undefined;
}
