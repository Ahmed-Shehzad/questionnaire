import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('AnswerMaxAggregate', { isAbstract: true })
export class AnswerMaxAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  questionId!: number | null;
}
