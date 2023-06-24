import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('AnswerAvgAggregate', { isAbstract: true })
export class AnswerAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  questionId!: number | null;
}
