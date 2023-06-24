import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerCreateNestedOneWithoutQuestionInput } from "../../answer/inputs/AnswerCreateNestedOneWithoutQuestionInput.input";
import { QuestionType } from "../../enums/QuestionType.enum";
import { QuestionCreatechoicesInput } from "../../question/inputs/QuestionCreatechoicesInput.input";

@NestJsGraphQL.InputType('QuestionCreateWithoutPageInput', { isAbstract: true })
export class QuestionCreateWithoutPageInput {
  @NestJsGraphQL.Field(() => QuestionType)
  type!: "TEXT" | "SINGLE_CHOICE" | "MULTIPLE_CHOICE";

  @NestJsGraphQL.Field(() => String)
  text!: string;

  @NestJsGraphQL.Field(() => QuestionCreatechoicesInput, { nullable: true })
  choices?: QuestionCreatechoicesInput | undefined;

  @NestJsGraphQL.Field(() => AnswerCreateNestedOneWithoutQuestionInput, { nullable: true })
  answer?: AnswerCreateNestedOneWithoutQuestionInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  nextPageId?: number | undefined;
}
