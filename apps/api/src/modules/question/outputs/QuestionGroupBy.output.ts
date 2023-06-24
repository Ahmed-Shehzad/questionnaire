import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionAvgAggregate } from '../../common/outputs/QuestionAvgAggregate.output';
import { QuestionSumAggregate } from '../../common/outputs/QuestionSumAggregate.output';
import { QuestionType } from '../../enums/QuestionType.enum';
import { QuestionCountAggregate } from './QuestionCountAggregate.output';
import { QuestionMaxAggregate } from './QuestionMaxAggregate.output';
import { QuestionMinAggregate } from './QuestionMinAggregate.output';

@NestJsGraphQL.ObjectType('QuestionGroupBy', { isAbstract: true })
export class QuestionGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  pageId!: number;

  @NestJsGraphQL.Field(() => QuestionType)
  type!: 'TEXT' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';

  @NestJsGraphQL.Field(() => String)
  text!: string;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  choices!: string[] | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  nextPageId!: number | null;

  @NestJsGraphQL.Field(() => QuestionCountAggregate, { nullable: true })
  _count!: QuestionCountAggregate | null;

  @NestJsGraphQL.Field(() => QuestionAvgAggregate, { nullable: true })
  _avg!: QuestionAvgAggregate | null;

  @NestJsGraphQL.Field(() => QuestionSumAggregate, { nullable: true })
  _sum!: QuestionSumAggregate | null;

  @NestJsGraphQL.Field(() => QuestionMinAggregate, { nullable: true })
  _min!: QuestionMinAggregate | null;

  @NestJsGraphQL.Field(() => QuestionMaxAggregate, { nullable: true })
  _max!: QuestionMaxAggregate | null;
}
