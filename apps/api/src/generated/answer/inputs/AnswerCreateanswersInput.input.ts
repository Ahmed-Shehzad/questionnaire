import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('AnswerCreateanswersInput', { isAbstract: true })
export class AnswerCreateanswersInput {
  @NestJsGraphQL.Field(() => [String])
  set!: string[];
}
