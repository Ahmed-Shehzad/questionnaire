import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('QuestionnaireWhereUniqueInput', { isAbstract: true })
export class QuestionnaireWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
