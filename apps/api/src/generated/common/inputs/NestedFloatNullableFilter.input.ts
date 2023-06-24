import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('NestedFloatNullableFilter', { isAbstract: true })
export class NestedFloatNullableFilter {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  equals?: number | undefined;

  @NestJsGraphQL.Field(() => [NestJsGraphQL.Float], { nullable: true })
  in?: number[] | undefined;

  @NestJsGraphQL.Field(() => [NestJsGraphQL.Float], { nullable: true })
  notIn?: number[] | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  lt?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  lte?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  gt?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  gte?: number | undefined;

  @NestJsGraphQL.Field(() => NestedFloatNullableFilter, { nullable: true })
  not?: NestedFloatNullableFilter | undefined;
}
