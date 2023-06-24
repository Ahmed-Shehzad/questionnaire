import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('QuestionWhereUniqueInput', { isAbstract: true })
export class QuestionWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
