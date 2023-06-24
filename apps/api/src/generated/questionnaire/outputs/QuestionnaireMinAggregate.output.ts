import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('QuestionnaireMinAggregate', { isAbstract: true })
export class QuestionnaireMinAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  name!: string | null;
}
