import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionCreateManyPageInputEnvelope } from "../../question/inputs/QuestionCreateManyPageInputEnvelope.input";
import { QuestionCreateOrConnectWithoutPageInput } from "../../question/inputs/QuestionCreateOrConnectWithoutPageInput.input";
import { QuestionCreateWithoutPageInput } from "../../question/inputs/QuestionCreateWithoutPageInput.input";
import { QuestionWhereUniqueInput } from "../../question/inputs/QuestionWhereUniqueInput.input";

@NestJsGraphQL.InputType('QuestionCreateNestedManyWithoutPageInput', { isAbstract: true })
export class QuestionCreateNestedManyWithoutPageInput {
  @NestJsGraphQL.Field(() => [QuestionCreateWithoutPageInput], { nullable: true })
  create?: QuestionCreateWithoutPageInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionCreateOrConnectWithoutPageInput], { nullable: true })
  connectOrCreate?: QuestionCreateOrConnectWithoutPageInput[] | undefined;

  @NestJsGraphQL.Field(() => QuestionCreateManyPageInputEnvelope, { nullable: true })
  createMany?: QuestionCreateManyPageInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [QuestionWhereUniqueInput], { nullable: true })
  connect?: QuestionWhereUniqueInput[] | undefined;
}
