import * as NestJsGraphQL from '@nestjs/graphql';
import { PageScalarFieldEnum } from '../common/enums';
import { PageCreateInput } from './inputs/PageCreateInput.input';
import { PageCreateManyInput } from './inputs/PageCreateManyInput.input';
import { PageOrderByWithAggregationInput } from './inputs/PageOrderByWithAggregationInput.input';
import { PageOrderByWithRelationInput } from './inputs/PageOrderByWithRelationInput.input';
import { PageScalarWhereWithAggregatesInput } from './inputs/PageScalarWhereWithAggregatesInput.input';
import { PageUpdateInput } from './inputs/PageUpdateInput.input';
import { PageUpdateManyMutationInput } from './inputs/PageUpdateManyMutationInput.input';
import { PageWhereInput } from './inputs/PageWhereInput.input';
import { PageWhereUniqueInput } from './inputs/PageWhereUniqueInput.input';

@NestJsGraphQL.ArgsType()
export class AggregatePageArgs {
  @NestJsGraphQL.Field(() => PageWhereInput, { nullable: true })
  where?: PageWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PageOrderByWithRelationInput], { nullable: true })
  orderBy?: PageOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => PageWhereUniqueInput, { nullable: true })
  cursor?: PageWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyPageArgs {
  @NestJsGraphQL.Field(() => [PageCreateManyInput])
  data!: PageCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOnePageArgs {
  @NestJsGraphQL.Field(() => PageCreateInput)
  data!: PageCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyPageArgs {
  @NestJsGraphQL.Field(() => PageWhereInput, { nullable: true })
  where?: PageWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOnePageArgs {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstPageArgs {
  @NestJsGraphQL.Field(() => PageWhereInput, { nullable: true })
  where?: PageWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PageOrderByWithRelationInput], { nullable: true })
  orderBy?: PageOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => PageWhereUniqueInput, { nullable: true })
  cursor?: PageWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [PageScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<'id' | 'title' | 'questionnaireId' | 'predecessorId'>
    | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyPageArgs {
  @NestJsGraphQL.Field(() => PageWhereInput, { nullable: true })
  where?: PageWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PageOrderByWithRelationInput], { nullable: true })
  orderBy?: PageOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => PageWhereUniqueInput, { nullable: true })
  cursor?: PageWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [PageScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<'id' | 'title' | 'questionnaireId' | 'predecessorId'>
    | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniquePageArgs {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByPageArgs {
  @NestJsGraphQL.Field(() => PageWhereInput, { nullable: true })
  where?: PageWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PageOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: PageOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [PageScalarFieldEnum])
  by!: Array<'id' | 'title' | 'questionnaireId' | 'predecessorId'>;

  @NestJsGraphQL.Field(() => PageScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: PageScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyPageArgs {
  @NestJsGraphQL.Field(() => PageUpdateManyMutationInput)
  data!: PageUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => PageWhereInput, { nullable: true })
  where?: PageWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOnePageArgs {
  @NestJsGraphQL.Field(() => PageUpdateInput)
  data!: PageUpdateInput;

  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOnePageArgs {
  @NestJsGraphQL.Field(() => PageWhereUniqueInput)
  where!: PageWhereUniqueInput;

  @NestJsGraphQL.Field(() => PageCreateInput)
  create!: PageCreateInput;

  @NestJsGraphQL.Field(() => PageUpdateInput)
  update!: PageUpdateInput;
}
