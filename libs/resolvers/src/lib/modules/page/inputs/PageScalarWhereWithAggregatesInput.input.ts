import * as NestJsGraphQL from "@nestjs/graphql";
import { IntNullableWithAggregatesFilter } from "../../common/inputs/IntNullableWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('PageScalarWhereWithAggregatesInput', { isAbstract: true })
export class PageScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [PageScalarWhereWithAggregatesInput], { nullable: true })
  AND?: PageScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [PageScalarWhereWithAggregatesInput], { nullable: true })
  OR?: PageScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [PageScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: PageScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  questionnaireId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  predecessorId?: IntNullableWithAggregatesFilter | undefined;
}
