import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('QuestionnaireCountAggregate', { isAbstract: true })
export class QuestionnaireCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  name!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
