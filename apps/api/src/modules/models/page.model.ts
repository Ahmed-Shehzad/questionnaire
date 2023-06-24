import * as NestJsGraphQL from '@nestjs/graphql';
import { PageCount } from '../page/outputs/PageCount.output';
import { Question } from './question.model';
import { Questionnaire } from './questionnaire.model';

@NestJsGraphQL.ObjectType('Page', { isAbstract: true })
export class Page {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  questions?: Question[];

  questionnaire?: Questionnaire;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  questionnaireId!: number;

  successor?: Page | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  predecessorId?: number | null;

  predecessor?: Page | null;

  @NestJsGraphQL.Field(() => PageCount, { nullable: true })
  _count?: PageCount | null;
}
