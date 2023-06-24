import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionType } from "../enums/QuestionType.enum";
import { Answer } from "../models/answer.model";
import { Page } from "../models/page.model";

@NestJsGraphQL.ObjectType('Question', { isAbstract: true })
export class Question {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  page?: Page;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  pageId!: number;

  @NestJsGraphQL.Field(() => QuestionType)
  type!: "TEXT" | "SINGLE_CHOICE" | "MULTIPLE_CHOICE";

  @NestJsGraphQL.Field(() => String)
  text!: string;

  @NestJsGraphQL.Field(() => [String])
  choices!: string[];

  answer?: Answer | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  nextPageId?: number | null;
}
