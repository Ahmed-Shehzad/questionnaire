import * as NestJsGraphQL from "@nestjs/graphql";
import { Question } from "../models/question.model";

@NestJsGraphQL.ObjectType('Answer', { isAbstract: true })
export class Answer {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  questionId!: number;

  Question?: Question;

  @NestJsGraphQL.Field(() => [String])
  answers!: string[];
}
