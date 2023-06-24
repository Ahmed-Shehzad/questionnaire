import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionnaireScalarFieldEnum } from "../common/enums";
import { QuestionnaireCreateInput } from "../questionnaire/inputs/QuestionnaireCreateInput.input";
import { QuestionnaireCreateManyInput } from "../questionnaire/inputs/QuestionnaireCreateManyInput.input";
import { QuestionnaireOrderByWithAggregationInput } from "../questionnaire/inputs/QuestionnaireOrderByWithAggregationInput.input";
import { QuestionnaireOrderByWithRelationInput } from "../questionnaire/inputs/QuestionnaireOrderByWithRelationInput.input";
import { QuestionnaireScalarWhereWithAggregatesInput } from "../questionnaire/inputs/QuestionnaireScalarWhereWithAggregatesInput.input";
import { QuestionnaireUpdateInput } from "../questionnaire/inputs/QuestionnaireUpdateInput.input";
import { QuestionnaireUpdateManyMutationInput } from "../questionnaire/inputs/QuestionnaireUpdateManyMutationInput.input";
import { QuestionnaireWhereInput } from "../questionnaire/inputs/QuestionnaireWhereInput.input";
import { QuestionnaireWhereUniqueInput } from "../questionnaire/inputs/QuestionnaireWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateQuestionnaireArgs {
  @NestJsGraphQL.Field(() => QuestionnaireWhereInput, { nullable: true })
  where?: QuestionnaireWhereInput | undefined;

  @NestJsGraphQL.Field(() => [QuestionnaireOrderByWithRelationInput], { nullable: true })
  orderBy?: QuestionnaireOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireWhereUniqueInput, { nullable: true })
  cursor?: QuestionnaireWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyQuestionnaireArgs {
  @NestJsGraphQL.Field(() => [QuestionnaireCreateManyInput])
  data!: QuestionnaireCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneQuestionnaireArgs {
  @NestJsGraphQL.Field(() => QuestionnaireCreateInput)
  data!: QuestionnaireCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyQuestionnaireArgs {
  @NestJsGraphQL.Field(() => QuestionnaireWhereInput, { nullable: true })
  where?: QuestionnaireWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneQuestionnaireArgs {
  @NestJsGraphQL.Field(() => QuestionnaireWhereUniqueInput)
  where!: QuestionnaireWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstQuestionnaireArgs {
  @NestJsGraphQL.Field(() => QuestionnaireWhereInput, { nullable: true })
  where?: QuestionnaireWhereInput | undefined;

  @NestJsGraphQL.Field(() => [QuestionnaireOrderByWithRelationInput], { nullable: true })
  orderBy?: QuestionnaireOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireWhereUniqueInput, { nullable: true })
  cursor?: QuestionnaireWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [QuestionnaireScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyQuestionnaireArgs {
  @NestJsGraphQL.Field(() => QuestionnaireWhereInput, { nullable: true })
  where?: QuestionnaireWhereInput | undefined;

  @NestJsGraphQL.Field(() => [QuestionnaireOrderByWithRelationInput], { nullable: true })
  orderBy?: QuestionnaireOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireWhereUniqueInput, { nullable: true })
  cursor?: QuestionnaireWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [QuestionnaireScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueQuestionnaireArgs {
  @NestJsGraphQL.Field(() => QuestionnaireWhereUniqueInput)
  where!: QuestionnaireWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByQuestionnaireArgs {
  @NestJsGraphQL.Field(() => QuestionnaireWhereInput, { nullable: true })
  where?: QuestionnaireWhereInput | undefined;

  @NestJsGraphQL.Field(() => [QuestionnaireOrderByWithAggregationInput], { nullable: true })
  orderBy?: QuestionnaireOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [QuestionnaireScalarFieldEnum])
  by!: Array<"id" | "name">;

  @NestJsGraphQL.Field(() => QuestionnaireScalarWhereWithAggregatesInput, { nullable: true })
  having?: QuestionnaireScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyQuestionnaireArgs {
  @NestJsGraphQL.Field(() => QuestionnaireUpdateManyMutationInput)
  data!: QuestionnaireUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => QuestionnaireWhereInput, { nullable: true })
  where?: QuestionnaireWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneQuestionnaireArgs {
  @NestJsGraphQL.Field(() => QuestionnaireUpdateInput)
  data!: QuestionnaireUpdateInput;

  @NestJsGraphQL.Field(() => QuestionnaireWhereUniqueInput)
  where!: QuestionnaireWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneQuestionnaireArgs {
  @NestJsGraphQL.Field(() => QuestionnaireWhereUniqueInput)
  where!: QuestionnaireWhereUniqueInput;

  @NestJsGraphQL.Field(() => QuestionnaireCreateInput)
  create!: QuestionnaireCreateInput;

  @NestJsGraphQL.Field(() => QuestionnaireUpdateInput)
  update!: QuestionnaireUpdateInput;
}
