import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('AnswerSumAggregate', { isAbstract: true })
export class AnswerSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  questionId!: number | null;
}
