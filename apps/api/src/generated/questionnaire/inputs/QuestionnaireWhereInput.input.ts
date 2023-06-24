import * as NestJsGraphQL from "@nestjs/graphql";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { PageListRelationFilter } from "../../page/inputs/PageListRelationFilter.input";

@NestJsGraphQL.InputType('QuestionnaireWhereInput', { isAbstract: true })
export class QuestionnaireWhereInput {
  @NestJsGraphQL.Field(() => [QuestionnaireWhereInput], { nullable: true })
  AND?: QuestionnaireWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionnaireWhereInput], { nullable: true })
  OR?: QuestionnaireWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionnaireWhereInput], { nullable: true })
  NOT?: QuestionnaireWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => PageListRelationFilter, { nullable: true })
  pages?: PageListRelationFilter | undefined;
}
