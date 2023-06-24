import * as NestJsGraphQL from "@nestjs/graphql";
import { Page } from "../models/page.model";
import { QuestionnaireCount } from "../questionnaire/outputs/QuestionnaireCount.output";

@NestJsGraphQL.ObjectType('Questionnaire', { isAbstract: true })
export class Questionnaire {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  pages?: Page[];

  @NestJsGraphQL.Field(() => QuestionnaireCount, { nullable: true })
  _count?: QuestionnaireCount | null;
}
