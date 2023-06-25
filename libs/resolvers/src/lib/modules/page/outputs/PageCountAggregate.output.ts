import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PageCountAggregate', { isAbstract: true })
export class PageCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  title!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  questionnaireId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  predecessorId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
