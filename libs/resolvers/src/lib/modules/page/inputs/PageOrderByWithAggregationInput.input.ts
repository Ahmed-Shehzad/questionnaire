import * as NestJsGraphQL from '@nestjs/graphql';
import { SortOrder } from '../../common/enums';
import { PageAvgOrderByAggregateInput } from './PageAvgOrderByAggregateInput.input';
import { PageCountOrderByAggregateInput } from './PageCountOrderByAggregateInput.input';
import { PageMaxOrderByAggregateInput } from './PageMaxOrderByAggregateInput.input';
import { PageMinOrderByAggregateInput } from './PageMinOrderByAggregateInput.input';
import { PageSumOrderByAggregateInput } from './PageSumOrderByAggregateInput.input';

@NestJsGraphQL.InputType('PageOrderByWithAggregationInput', {
  isAbstract: true,
})
export class PageOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: 'asc' | 'desc' | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  title?: 'asc' | 'desc' | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  questionnaireId?: 'asc' | 'desc' | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  predecessorId?: 'asc' | 'desc' | undefined;

  @NestJsGraphQL.Field(() => PageCountOrderByAggregateInput, { nullable: true })
  _count?: PageCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PageAvgOrderByAggregateInput, { nullable: true })
  _avg?: PageAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PageMaxOrderByAggregateInput, { nullable: true })
  _max?: PageMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PageMinOrderByAggregateInput, { nullable: true })
  _min?: PageMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PageSumOrderByAggregateInput, { nullable: true })
  _sum?: PageSumOrderByAggregateInput | undefined;
}
