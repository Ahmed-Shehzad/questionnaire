import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionCreateWithoutPageInput } from "../../question/inputs/QuestionCreateWithoutPageInput.input";
import { QuestionUpdateWithoutPageInput } from "../../question/inputs/QuestionUpdateWithoutPageInput.input";
import { QuestionWhereUniqueInput } from "../../question/inputs/QuestionWhereUniqueInput.input";

@NestJsGraphQL.InputType('QuestionUpsertWithWhereUniqueWithoutPageInput', { isAbstract: true })
export class QuestionUpsertWithWhereUniqueWithoutPageInput {
  @NestJsGraphQL.Field(() => QuestionWhereUniqueInput)
  where!: QuestionWhereUniqueInput;

  @NestJsGraphQL.Field(() => QuestionUpdateWithoutPageInput)
  update!: QuestionUpdateWithoutPageInput;

  @NestJsGraphQL.Field(() => QuestionCreateWithoutPageInput)
  create!: QuestionCreateWithoutPageInput;
}
