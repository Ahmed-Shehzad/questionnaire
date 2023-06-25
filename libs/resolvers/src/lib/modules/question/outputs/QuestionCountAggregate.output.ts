import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('QuestionCountAggregate', { isAbstract: true })
export class QuestionCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  pageId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  type!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  text!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  choices!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  nextPageId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
