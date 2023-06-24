import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerCreateOrConnectWithoutQuestionInput } from "../../answer/inputs/AnswerCreateOrConnectWithoutQuestionInput.input";
import { AnswerCreateWithoutQuestionInput } from "../../answer/inputs/AnswerCreateWithoutQuestionInput.input";
import { AnswerUpdateWithoutQuestionInput } from "../../answer/inputs/AnswerUpdateWithoutQuestionInput.input";
import { AnswerUpsertWithoutQuestionInput } from "../../answer/inputs/AnswerUpsertWithoutQuestionInput.input";
import { AnswerWhereUniqueInput } from "../../answer/inputs/AnswerWhereUniqueInput.input";

@NestJsGraphQL.InputType('AnswerUpdateOneWithoutQuestionNestedInput', { isAbstract: true })
export class AnswerUpdateOneWithoutQuestionNestedInput {
  @NestJsGraphQL.Field(() => AnswerCreateWithoutQuestionInput, { nullable: true })
  create?: AnswerCreateWithoutQuestionInput | undefined;

  @NestJsGraphQL.Field(() => AnswerCreateOrConnectWithoutQuestionInput, { nullable: true })
  connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | undefined;

  @NestJsGraphQL.Field(() => AnswerUpsertWithoutQuestionInput, { nullable: true })
  upsert?: AnswerUpsertWithoutQuestionInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => AnswerWhereUniqueInput, { nullable: true })
  connect?: AnswerWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => AnswerUpdateWithoutQuestionInput, { nullable: true })
  update?: AnswerUpdateWithoutQuestionInput | undefined;
}
