import * as NestJsGraphQL from '@nestjs/graphql';
import { SortOrder } from '../../common/enums';
import { AnswerAvgOrderByAggregateInput } from './AnswerAvgOrderByAggregateInput.input';
import { AnswerCountOrderByAggregateInput } from './AnswerCountOrderByAggregateInput.input';
import { AnswerMaxOrderByAggregateInput } from './AnswerMaxOrderByAggregateInput.input';
import { AnswerMinOrderByAggregateInput } from './AnswerMinOrderByAggregateInput.input';
import { AnswerSumOrderByAggregateInput } from './AnswerSumOrderByAggregateInput.input';

@NestJsGraphQL.InputType('AnswerOrderByWithAggregationInput', {
  isAbstract: true,
})
export class AnswerOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: 'asc' | 'desc' | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  questionId?: 'asc' | 'desc' | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  answers?: 'asc' | 'desc' | undefined;

  @NestJsGraphQL.Field(() => AnswerCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: AnswerCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => AnswerAvgOrderByAggregateInput, { nullable: true })
  _avg?: AnswerAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => AnswerMaxOrderByAggregateInput, { nullable: true })
  _max?: AnswerMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => AnswerMinOrderByAggregateInput, { nullable: true })
  _min?: AnswerMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => AnswerSumOrderByAggregateInput, { nullable: true })
  _sum?: AnswerSumOrderByAggregateInput | undefined;
}
