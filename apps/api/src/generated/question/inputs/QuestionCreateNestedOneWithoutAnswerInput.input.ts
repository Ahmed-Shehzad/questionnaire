import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionCreateOrConnectWithoutAnswerInput } from "../../question/inputs/QuestionCreateOrConnectWithoutAnswerInput.input";
import { QuestionCreateWithoutAnswerInput } from "../../question/inputs/QuestionCreateWithoutAnswerInput.input";
import { QuestionWhereUniqueInput } from "../../question/inputs/QuestionWhereUniqueInput.input";

@NestJsGraphQL.InputType('QuestionCreateNestedOneWithoutAnswerInput', { isAbstract: true })
export class QuestionCreateNestedOneWithoutAnswerInput {
  @NestJsGraphQL.Field(() => QuestionCreateWithoutAnswerInput, { nullable: true })
  create?: QuestionCreateWithoutAnswerInput | undefined;

  @NestJsGraphQL.Field(() => QuestionCreateOrConnectWithoutAnswerInput, { nullable: true })
  connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput | undefined;

  @NestJsGraphQL.Field(() => QuestionWhereUniqueInput, { nullable: true })
  connect?: QuestionWhereUniqueInput | undefined;
}
