import * as NestJsGraphQL from "@nestjs/graphql";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";

@NestJsGraphQL.InputType('PageScalarWhereInput', { isAbstract: true })
export class PageScalarWhereInput {
  @NestJsGraphQL.Field(() => [PageScalarWhereInput], { nullable: true })
  AND?: PageScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PageScalarWhereInput], { nullable: true })
  OR?: PageScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PageScalarWhereInput], { nullable: true })
  NOT?: PageScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  questionnaireId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  predecessorId?: IntNullableFilter | undefined;
}
