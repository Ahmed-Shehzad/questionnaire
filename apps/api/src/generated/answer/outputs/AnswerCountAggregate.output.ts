import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('AnswerCountAggregate', { isAbstract: true })
export class AnswerCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  questionId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  answers!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
