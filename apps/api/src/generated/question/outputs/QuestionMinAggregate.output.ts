import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionType } from "../../enums/QuestionType.enum";

@NestJsGraphQL.ObjectType('QuestionMinAggregate', { isAbstract: true })
export class QuestionMinAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  pageId!: number | null;

  @NestJsGraphQL.Field(() => QuestionType, { nullable: true })
  type!: "TEXT" | "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  text!: string | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  nextPageId!: number | null;
}
