import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionnaireAvgAggregate } from '../../common/outputs/QuestionnaireAvgAggregate.output';
import { QuestionnaireSumAggregate } from '../../common/outputs/QuestionnaireSumAggregate.output';
import { QuestionnaireCountAggregate } from './QuestionnaireCountAggregate.output';
import { QuestionnaireMaxAggregate } from './QuestionnaireMaxAggregate.output';
import { QuestionnaireMinAggregate } from './QuestionnaireMinAggregate.output';

@NestJsGraphQL.ObjectType('QuestionnaireGroupBy', { isAbstract: true })
export class QuestionnaireGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => QuestionnaireCountAggregate, { nullable: true })
  _count!: QuestionnaireCountAggregate | null;

  @NestJsGraphQL.Field(() => QuestionnaireAvgAggregate, { nullable: true })
  _avg!: QuestionnaireAvgAggregate | null;

  @NestJsGraphQL.Field(() => QuestionnaireSumAggregate, { nullable: true })
  _sum!: QuestionnaireSumAggregate | null;

  @NestJsGraphQL.Field(() => QuestionnaireMinAggregate, { nullable: true })
  _min!: QuestionnaireMinAggregate | null;

  @NestJsGraphQL.Field(() => QuestionnaireMaxAggregate, { nullable: true })
  _max!: QuestionnaireMaxAggregate | null;
}
