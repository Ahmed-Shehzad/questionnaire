import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerUpdateanswersInput } from "../../answer/inputs/AnswerUpdateanswersInput.input";

@NestJsGraphQL.InputType('AnswerUpdateManyMutationInput', { isAbstract: true })
export class AnswerUpdateManyMutationInput {
  @NestJsGraphQL.Field(() => AnswerUpdateanswersInput, { nullable: true })
  answers?: AnswerUpdateanswersInput | undefined;
}
