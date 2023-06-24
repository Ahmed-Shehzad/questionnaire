import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PageCount', { isAbstract: true })
export class PageCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  questions!: number;
}
