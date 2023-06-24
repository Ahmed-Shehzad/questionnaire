import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('QuestionUpdatechoicesInput', { isAbstract: true })
export class QuestionUpdatechoicesInput {
  @NestJsGraphQL.Field(() => [String], { nullable: true })
  set?: string[] | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  push?: string[] | undefined;
}
