import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('PageCreateManyQuestionnaireInput', { isAbstract: true })
export class PageCreateManyQuestionnaireInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  predecessorId?: number | undefined;
}
