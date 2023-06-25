import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('QuestionnaireCreateWithoutPagesInput', { isAbstract: true })
export class QuestionnaireCreateWithoutPagesInput {
  @NestJsGraphQL.Field(() => String)
  name!: string;
}
