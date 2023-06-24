import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionCreateWithoutPageInput } from "../../question/inputs/QuestionCreateWithoutPageInput.input";
import { QuestionWhereUniqueInput } from "../../question/inputs/QuestionWhereUniqueInput.input";

@NestJsGraphQL.InputType('QuestionCreateOrConnectWithoutPageInput', { isAbstract: true })
export class QuestionCreateOrConnectWithoutPageInput {
  @NestJsGraphQL.Field(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;

  @NestJsGraphQL.Field(() => QuestionCreateWithoutPageInput)
  create!: QuestionCreateWithoutPageInput;
}
