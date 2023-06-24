import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionAvgAggregate } from '../../common/outputs/QuestionAvgAggregate.output';
import { QuestionSumAggregate } from '../../common/outputs/QuestionSumAggregate.output';
import { QuestionCountAggregate } from './QuestionCountAggregate.output';
import { QuestionMaxAggregate } from './QuestionMaxAggregate.output';
import { QuestionMinAggregate } from './QuestionMinAggregate.output';

@NestJsGraphQL.ObjectType('AggregateQuestion', { isAbstract: true })
export class AggregateQuestion {
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
