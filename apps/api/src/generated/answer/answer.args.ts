import * as NestJsGraphQL from "@nestjs/graphql";
import { AnswerCreateInput } from "../answer/inputs/AnswerCreateInput.input";
import { AnswerCreateManyInput } from "../answer/inputs/AnswerCreateManyInput.input";
import { AnswerOrderByWithAggregationInput } from "../answer/inputs/AnswerOrderByWithAggregationInput.input";
import { AnswerOrderByWithRelationInput } from "../answer/inputs/AnswerOrderByWithRelationInput.input";
import { AnswerScalarWhereWithAggregatesInput } from "../answer/inputs/AnswerScalarWhereWithAggregatesInput.input";
import { AnswerUpdateInput } from "../answer/inputs/AnswerUpdateInput.input";
import { AnswerUpdateManyMutationInput } from "../answer/inputs/AnswerUpdateManyMutationInput.input";
import { AnswerWhereInput } from "../answer/inputs/AnswerWhereInput.input";
import { AnswerWhereUniqueInput } from "../answer/inputs/AnswerWhereUniqueInput.input";
import { AnswerScalarFieldEnum } from "../common/enums";

@NestJsGraphQL.ArgsType()
export class AggregateAnswerArgs {
  @NestJsGraphQL.Field(() => AnswerWhereInput, { nullable: true })
  where?: AnswerWhereInput | undefined;

  @NestJsGraphQL.Field(() => [AnswerOrderByWithRelationInput], { nullable: true })
  orderBy?: AnswerOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => AnswerWhereUniqueInput, { nullable: true })
  cursor?: AnswerWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyAnswerArgs {
  @NestJsGraphQL.Field(() => [AnswerCreateManyInput])
  data!: AnswerCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneAnswerArgs {
  @NestJsGraphQL.Field(() => AnswerCreateInput)
  data!: AnswerCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyAnswerArgs {
  @NestJsGraphQL.Field(() => AnswerWhereInput, { nullable: true })
  where?: AnswerWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneAnswerArgs {
  @NestJsGraphQL.Field(() => AnswerWhereUniqueInput)
  where!: AnswerWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstAnswerArgs {
  @NestJsGraphQL.Field(() => AnswerWhereInput, { nullable: true })
  where?: AnswerWhereInput | undefined;

  @NestJsGraphQL.Field(() => [AnswerOrderByWithRelationInput], { nullable: true })
  orderBy?: AnswerOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => AnswerWhereUniqueInput, { nullable: true })
  cursor?: AnswerWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [AnswerScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "questionId" | "answers"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyAnswerArgs {
  @NestJsGraphQL.Field(() => AnswerWhereInput, { nullable: true })
  where?: AnswerWhereInput | undefined;

  @NestJsGraphQL.Field(() => [AnswerOrderByWithRelationInput], { nullable: true })
  orderBy?: AnswerOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => AnswerWhereUniqueInput, { nullable: true })
  cursor?: AnswerWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [AnswerScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "questionId" | "answers"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueAnswerArgs {
  @NestJsGraphQL.Field(() => AnswerWhereUniqueInput)
  where!: AnswerWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByAnswerArgs {
  @NestJsGraphQL.Field(() => AnswerWhereInput, { nullable: true })
  where?: AnswerWhereInput | undefined;

  @NestJsGraphQL.Field(() => [AnswerOrderByWithAggregationInput], { nullable: true })
  orderBy?: AnswerOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [AnswerScalarFieldEnum])
  by!: Array<"id" | "questionId" | "answers">;

  @NestJsGraphQL.Field(() => AnswerScalarWhereWithAggregatesInput, { nullable: true })
  having?: AnswerScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyAnswerArgs {
  @NestJsGraphQL.Field(() => AnswerUpdateManyMutationInput)
  data!: AnswerUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => AnswerWhereInput, { nullable: true })
  where?: AnswerWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneAnswerArgs {
  @NestJsGraphQL.Field(() => AnswerUpdateInput)
  data!: AnswerUpdateInput;

  @NestJsGraphQL.Field(() => AnswerWhereUniqueInput)
  where!: AnswerWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneAnswerArgs {
  @NestJsGraphQL.Field(() => AnswerWhereUniqueInput)
  where!: AnswerWhereUniqueInput;

  @NestJsGraphQL.Field(() => AnswerCreateInput)
  create!: AnswerCreateInput;

  @NestJsGraphQL.Field(() => AnswerUpdateInput)
  update!: AnswerUpdateInput;
}
