import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PageSumAggregate', { isAbstract: true })
export class PageSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  questionnaireId!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  predecessorId!: number | null;
}
