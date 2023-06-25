import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('PageWhereUniqueInput', { isAbstract: true })
export class PageWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  predecessorId?: number | undefined;
}
