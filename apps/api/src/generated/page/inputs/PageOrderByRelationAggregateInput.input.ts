import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";

@NestJsGraphQL.InputType('PageOrderByRelationAggregateInput', { isAbstract: true })
export class PageOrderByRelationAggregateInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  _count?: "asc" | "desc" | undefined;
}
