import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('AnswerWhereUniqueInput', { isAbstract: true })
export class AnswerWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  questionId?: number | undefined;
}
