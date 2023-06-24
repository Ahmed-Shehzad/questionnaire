import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('PageCreateManyInput', { isAbstract: true })
export class PageCreateManyInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  questionnaireId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  predecessorId?: number | undefined;
}
