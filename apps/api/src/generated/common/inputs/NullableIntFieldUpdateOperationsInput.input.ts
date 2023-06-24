import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('NullableIntFieldUpdateOperationsInput', { isAbstract: true })
export class NullableIntFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  set?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  increment?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  decrement?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  multiply?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  divide?: number | undefined;
}
