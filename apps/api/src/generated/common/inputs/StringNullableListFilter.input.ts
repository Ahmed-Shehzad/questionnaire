import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('StringNullableListFilter', { isAbstract: true })
export class StringNullableListFilter {
  @NestJsGraphQL.Field(() => [String], { nullable: true })
  equals?: string[] | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  has?: string | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  hasEvery?: string[] | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  hasSome?: string[] | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  isEmpty?: boolean | undefined;
}
