import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('AnswerMinAggregate', { isAbstract: true })
export class AnswerMinAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  questionId!: number | null;
}
