import * as NestJsGraphQL from '@nestjs/graphql';
import { AnswerAvgAggregate } from '../../common/outputs/AnswerAvgAggregate.output';
import { AnswerSumAggregate } from '../../common/outputs/AnswerSumAggregate.output';
import { AnswerCountAggregate } from './AnswerCountAggregate.output';
import { AnswerMaxAggregate } from './AnswerMaxAggregate.output';
import { AnswerMinAggregate } from './AnswerMinAggregate.output';

@NestJsGraphQL.ObjectType('AnswerGroupBy', { isAbstract: true })
export class AnswerGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  questionId!: number;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  answers!: string[] | null;

  @NestJsGraphQL.Field(() => AnswerCountAggregate, { nullable: true })
  _count!: AnswerCountAggregate | null;

  @NestJsGraphQL.Field(() => AnswerAvgAggregate, { nullable: true })
  _avg!: AnswerAvgAggregate | null;

  @NestJsGraphQL.Field(() => AnswerSumAggregate, { nullable: true })
  _sum!: AnswerSumAggregate | null;

  @NestJsGraphQL.Field(() => AnswerMinAggregate, { nullable: true })
  _min!: AnswerMinAggregate | null;

  @NestJsGraphQL.Field(() => AnswerMaxAggregate, { nullable: true })
  _max!: AnswerMaxAggregate | null;
}
