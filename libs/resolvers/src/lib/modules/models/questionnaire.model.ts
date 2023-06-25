import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionnaireCount } from '../questionnaire/outputs/QuestionnaireCount.output';
import { Page } from './page.model';

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
