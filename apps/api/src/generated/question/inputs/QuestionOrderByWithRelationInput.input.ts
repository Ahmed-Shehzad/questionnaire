import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerOrderByWithRelationInput } from "../../answer/inputs/AnswerOrderByWithRelationInput.input";
import { SortOrder } from "../../common/enums";
import { PageOrderByWithRelationInput } from "../../page/inputs/PageOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('QuestionOrderByWithRelationInput', { isAbstract: true })
export class QuestionOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PageOrderByWithRelationInput, { nullable: true })
  page?: PageOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  pageId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  type?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  text?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  choices?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => AnswerOrderByWithRelationInput, { nullable: true })
  answer?: AnswerOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  nextPageId?: "asc" | "desc" | undefined;
}
