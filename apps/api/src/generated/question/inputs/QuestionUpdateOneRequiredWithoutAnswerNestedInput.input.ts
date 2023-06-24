import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionCreateOrConnectWithoutAnswerInput } from "../../question/inputs/QuestionCreateOrConnectWithoutAnswerInput.input";
import { QuestionCreateWithoutAnswerInput } from "../../question/inputs/QuestionCreateWithoutAnswerInput.input";
import { QuestionUpdateWithoutAnswerInput } from "../../question/inputs/QuestionUpdateWithoutAnswerInput.input";
import { QuestionUpsertWithoutAnswerInput } from "../../question/inputs/QuestionUpsertWithoutAnswerInput.input";
import { QuestionWhereUniqueInput } from "../../question/inputs/QuestionWhereUniqueInput.input";

@NestJsGraphQL.InputType('QuestionUpdateOneRequiredWithoutAnswerNestedInput', { isAbstract: true })
export class QuestionUpdateOneRequiredWithoutAnswerNestedInput {
  @NestJsGraphQL.Field(() => QuestionCreateWithoutAnswerInput, { nullable: true })
  create?: QuestionCreateWithoutAnswerInput | undefined;

  @NestJsGraphQL.Field(() => QuestionCreateOrConnectWithoutAnswerInput, { nullable: true })
  connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput | undefined;

  @NestJsGraphQL.Field(() => QuestionUpsertWithoutAnswerInput, { nullable: true })
  upsert?: QuestionUpsertWithoutAnswerInput | undefined;

  @NestJsGraphQL.Field(() => QuestionWhereUniqueInput, { nullable: true })
  connect?: QuestionWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => QuestionUpdateWithoutAnswerInput, { nullable: true })
  update?: QuestionUpdateWithoutAnswerInput | undefined;
}
