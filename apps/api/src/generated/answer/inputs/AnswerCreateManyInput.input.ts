import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerCreateanswersInput } from "../../answer/inputs/AnswerCreateanswersInput.input";

@NestJsGraphQL.InputType('AnswerCreateManyInput', { isAbstract: true })
export class AnswerCreateManyInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  questionId!: number;

  @NestJsGraphQL.Field(() => AnswerCreateanswersInput, { nullable: true })
  answers?: AnswerCreateanswersInput | undefined;
}
