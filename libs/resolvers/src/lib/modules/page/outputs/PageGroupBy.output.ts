import * as NestJsGraphQL from '@nestjs/graphql';
import { PageAvgAggregate } from '../../common/outputs/PageAvgAggregate.output';
import { PageSumAggregate } from '../../common/outputs/PageSumAggregate.output';
import { PageCountAggregate } from './PageCountAggregate.output';
import { PageMaxAggregate } from './PageMaxAggregate.output';
import { PageMinAggregate } from './PageMinAggregate.output';

@NestJsGraphQL.ObjectType('PageGroupBy', { isAbstract: true })
export class PageGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  questionnaireId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  predecessorId!: number | null;

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
