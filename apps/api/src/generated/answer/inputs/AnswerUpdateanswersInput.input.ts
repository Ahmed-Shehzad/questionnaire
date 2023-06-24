import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('AnswerUpdateanswersInput', { isAbstract: true })
export class AnswerUpdateanswersInput {
  @NestJsGraphQL.Field(() => [String], { nullable: true })
  set?: string[] | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  push?: string[] | undefined;
}
