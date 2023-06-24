import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('QuestionnaireCount', { isAbstract: true })
export class QuestionnaireCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  pages!: number;
}
