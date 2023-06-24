import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('QuestionCreatechoicesInput', { isAbstract: true })
export class QuestionCreatechoicesInput {
  @NestJsGraphQL.Field(() => [String])
  set!: string[];
}
