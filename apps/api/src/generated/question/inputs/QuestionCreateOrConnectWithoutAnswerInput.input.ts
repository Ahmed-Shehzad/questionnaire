import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionCreateWithoutAnswerInput } from "../../question/inputs/QuestionCreateWithoutAnswerInput.input";
import { QuestionWhereUniqueInput } from "../../question/inputs/QuestionWhereUniqueInput.input";

@NestJsGraphQL.InputType('QuestionCreateOrConnectWithoutAnswerInput', { isAbstract: true })
export class QuestionCreateOrConnectWithoutAnswerInput {
  @NestJsGraphQL.Field(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;

  @NestJsGraphQL.Field(() => QuestionCreateWithoutAnswerInput)
  create!: QuestionCreateWithoutAnswerInput;
}
