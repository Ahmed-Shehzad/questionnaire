import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerCreateanswersInput } from "../../answer/inputs/AnswerCreateanswersInput.input";
import { QuestionCreateNestedOneWithoutAnswerInput } from "../../question/inputs/QuestionCreateNestedOneWithoutAnswerInput.input";

@NestJsGraphQL.InputType('AnswerCreateInput', { isAbstract: true })
export class AnswerCreateInput {
  @NestJsGraphQL.Field(() => QuestionCreateNestedOneWithoutAnswerInput)
  Question!: QuestionCreateNestedOneWithoutAnswerInput;

  @NestJsGraphQL.Field(() => AnswerCreateanswersInput, { nullable: true })
  answers?: AnswerCreateanswersInput | undefined;
}
