import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionUpdateWithoutPageInput } from "../../question/inputs/QuestionUpdateWithoutPageInput.input";
import { QuestionWhereUniqueInput } from "../../question/inputs/QuestionWhereUniqueInput.input";

@NestJsGraphQL.InputType('QuestionUpdateWithWhereUniqueWithoutPageInput', { isAbstract: true })
export class QuestionUpdateWithWhereUniqueWithoutPageInput {
  @NestJsGraphQL.Field(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;

  @NestJsGraphQL.Field(() => QuestionUpdateWithoutPageInput)
  data!: QuestionUpdateWithoutPageInput;
}
