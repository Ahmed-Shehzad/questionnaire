import * as NestJsGraphQL from '@nestjs/graphql';
import { PageCreateManyQuestionnaireInputEnvelope } from './PageCreateManyQuestionnaireInputEnvelope.input';
import { PageCreateOrConnectWithoutQuestionnaireInput } from './PageCreateOrConnectWithoutQuestionnaireInput.input';
import { PageCreateWithoutQuestionnaireInput } from './PageCreateWithoutQuestionnaireInput.input';
import { PageScalarWhereInput } from './PageScalarWhereInput.input';
import { PageUpdateManyWithWhereWithoutQuestionnaireInput } from './PageUpdateManyWithWhereWithoutQuestionnaireInput.input';
import { PageUpdateWithWhereUniqueWithoutQuestionnaireInput } from './PageUpdateWithWhereUniqueWithoutQuestionnaireInput.input';
import { PageUpsertWithWhereUniqueWithoutQuestionnaireInput } from './PageUpsertWithWhereUniqueWithoutQuestionnaireInput.input';
import { PageWhereUniqueInput } from './PageWhereUniqueInput.input';

@NestJsGraphQL.InputType('PageUpdateManyWithoutQuestionnaireNestedInput', {
  isAbstract: true,
})
export class PageUpdateManyWithoutQuestionnaireNestedInput {
  @NestJsGraphQL.Field(() => [PageCreateWithoutQuestionnaireInput], {
    nullable: true,
  })
  create?: PageCreateWithoutQuestionnaireInput[] | undefined;

  @NestJsGraphQL.Field(() => [PageCreateOrConnectWithoutQuestionnaireInput], {
    nullable: true,
  })
  connectOrCreate?: PageCreateOrConnectWithoutQuestionnaireInput[] | undefined;

  @NestJsGraphQL.Field(
    () => [PageUpsertWithWhereUniqueWithoutQuestionnaireInput],
    { nullable: true }
  )
  upsert?: PageUpsertWithWhereUniqueWithoutQuestionnaireInput[] | undefined;

  @NestJsGraphQL.Field(() => PageCreateManyQuestionnaireInputEnvelope, {
    nullable: true,
  })
  createMany?: PageCreateManyQuestionnaireInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [PageWhereUniqueInput], { nullable: true })
  set?: PageWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [PageWhereUniqueInput], { nullable: true })
  disconnect?: PageWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [PageWhereUniqueInput], { nullable: true })
  delete?: PageWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [PageWhereUniqueInput], { nullable: true })
  connect?: PageWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(
    () => [PageUpdateWithWhereUniqueWithoutQuestionnaireInput],
    { nullable: true }
  )
  update?: PageUpdateWithWhereUniqueWithoutQuestionnaireInput[] | undefined;

  @NestJsGraphQL.Field(
    () => [PageUpdateManyWithWhereWithoutQuestionnaireInput],
    { nullable: true }
  )
  updateMany?: PageUpdateManyWithWhereWithoutQuestionnaireInput[] | undefined;

  @NestJsGraphQL.Field(() => [PageScalarWhereInput], { nullable: true })
  deleteMany?: PageScalarWhereInput[] | undefined;
}
