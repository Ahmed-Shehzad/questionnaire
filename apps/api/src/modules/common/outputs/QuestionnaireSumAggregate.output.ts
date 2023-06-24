import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('QuestionnaireSumAggregate', { isAbstract: true })
export class QuestionnaireSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;
}
