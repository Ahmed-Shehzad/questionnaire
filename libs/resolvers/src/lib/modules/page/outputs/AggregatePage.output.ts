import * as NestJsGraphQL from '@nestjs/graphql';
import { PageAvgAggregate } from '../../common/outputs/PageAvgAggregate.output';
import { PageSumAggregate } from '../../common/outputs/PageSumAggregate.output';
import { PageCountAggregate } from './PageCountAggregate.output';
import { PageMaxAggregate } from './PageMaxAggregate.output';
import { PageMinAggregate } from './PageMinAggregate.output';

@NestJsGraphQL.ObjectType('AggregatePage', { isAbstract: true })
export class AggregatePage {
  @NestJsGraphQL.Field(() => PageCountAggregate, { nullable: true })
  _count!: PageCountAggregate | null;

  @NestJsGraphQL.Field(() => PageAvgAggregate, { nullable: true })
  _avg!: PageAvgAggregate | null;

  @NestJsGraphQL.Field(() => PageSumAggregate, { nullable: true })
  _sum!: PageSumAggregate | null;

  @NestJsGraphQL.Field(() => PageMinAggregate, { nullable: true })
  _min!: PageMinAggregate | null;

  @NestJsGraphQL.Field(() => PageMaxAggregate, { nullable: true })
  _max!: PageMaxAggregate | null;
}
