import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PageMaxAggregate', { isAbstract: true })
export class PageMaxAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  title!: string | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  questionnaireId!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  predecessorId!: number | null;
}
