import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionCreateManyPageInputEnvelope } from "../../question/inputs/QuestionCreateManyPageInputEnvelope.input";
import { QuestionCreateOrConnectWithoutPageInput } from "../../question/inputs/QuestionCreateOrConnectWithoutPageInput.input";
import { QuestionCreateWithoutPageInput } from "../../question/inputs/QuestionCreateWithoutPageInput.input";
import { QuestionScalarWhereInput } from "../../question/inputs/QuestionScalarWhereInput.input";
import { QuestionUpdateManyWithWhereWithoutPageInput } from "../../question/inputs/QuestionUpdateManyWithWhereWithoutPageInput.input";
import { QuestionUpdateWithWhereUniqueWithoutPageInput } from "../../question/inputs/QuestionUpdateWithWhereUniqueWithoutPageInput.input";
import { QuestionUpsertWithWhereUniqueWithoutPageInput } from "../../question/inputs/QuestionUpsertWithWhereUniqueWithoutPageInput.input";
import { QuestionWhereUniqueInput } from "../../question/inputs/QuestionWhereUniqueInput.input";

@NestJsGraphQL.InputType('QuestionUpdateManyWithoutPageNestedInput', { isAbstract: true })
export class QuestionUpdateManyWithoutPageNestedInput {
  @NestJsGraphQL.Field(() => [QuestionCreateWithoutPageInput], { nullable: true })
  create?: QuestionCreateWithoutPageInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionCreateOrConnectWithoutPageInput], { nullable: true })
  connectOrCreate?: QuestionCreateOrConnectWithoutPageInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionUpsertWithWhereUniqueWithoutPageInput], { nullable: true })
  upsert?: QuestionUpsertWithWhereUniqueWithoutPageInput[] | undefined;

  @NestJsGraphQL.Field(() => QuestionCreateManyPageInputEnvelope, { nullable: true })
  createMany?: QuestionCreateManyPageInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [QuestionWhereUniqueInput], { nullable: true })
  set?: QuestionWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionWhereUniqueInput], { nullable: true })
  disconnect?: QuestionWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionWhereUniqueInput], { nullable: true })
  delete?: QuestionWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionWhereUniqueInput], { nullable: true })
  connect?: QuestionWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionUpdateWithWhereUniqueWithoutPageInput], { nullable: true })
  update?: QuestionUpdateWithWhereUniqueWithoutPageInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionUpdateManyWithWhereWithoutPageInput], { nullable: true })
  updateMany?: QuestionUpdateManyWithWhereWithoutPageInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionScalarWhereInput], { nullable: true })
  deleteMany?: QuestionScalarWhereInput[] | undefined;
}
