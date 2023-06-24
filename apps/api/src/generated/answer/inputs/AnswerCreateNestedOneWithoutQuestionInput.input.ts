import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerCreateOrConnectWithoutQuestionInput } from "../../answer/inputs/AnswerCreateOrConnectWithoutQuestionInput.input";
import { AnswerCreateWithoutQuestionInput } from "../../answer/inputs/AnswerCreateWithoutQuestionInput.input";
import { AnswerWhereUniqueInput } from "../../answer/inputs/AnswerWhereUniqueInput.input";

@NestJsGraphQL.InputType('AnswerCreateNestedOneWithoutQuestionInput', { isAbstract: true })
export class AnswerCreateNestedOneWithoutQuestionInput {
  @NestJsGraphQL.Field(() => AnswerCreateWithoutQuestionInput, { nullable: true })
  create?: AnswerCreateWithoutQuestionInput | undefined;

  @NestJsGraphQL.Field(() => AnswerCreateOrConnectWithoutQuestionInput, { nullable: true })
  connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | undefined;

  @NestJsGraphQL.Field(() => AnswerWhereUniqueInput, { nullable: true })
  connect?: AnswerWhereUniqueInput | undefined;
}
