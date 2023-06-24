import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerUpdateanswersInput } from "../../answer/inputs/AnswerUpdateanswersInput.input";
import { QuestionUpdateOneRequiredWithoutAnswerNestedInput } from "../../question/inputs/QuestionUpdateOneRequiredWithoutAnswerNestedInput.input";

@NestJsGraphQL.InputType('AnswerUpdateInput', { isAbstract: true })
export class AnswerUpdateInput {
  @NestJsGraphQL.Field(() => QuestionUpdateOneRequiredWithoutAnswerNestedInput, { nullable: true })
  Question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput | undefined;

  @NestJsGraphQL.Field(() => AnswerUpdateanswersInput, { nullable: true })
  answers?: AnswerUpdateanswersInput | undefined;
}
