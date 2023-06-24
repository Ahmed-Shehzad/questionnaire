import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('QuestionAvgAggregate', { isAbstract: true })
export class QuestionAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  pageId!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  nextPageId!: number | null;
}
