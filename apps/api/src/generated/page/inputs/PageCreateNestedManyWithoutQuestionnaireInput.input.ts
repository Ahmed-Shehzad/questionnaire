import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateManyQuestionnaireInputEnvelope } from "../../page/inputs/PageCreateManyQuestionnaireInputEnvelope.input";
import { PageCreateOrConnectWithoutQuestionnaireInput } from "../../page/inputs/PageCreateOrConnectWithoutQuestionnaireInput.input";
import { PageCreateWithoutQuestionnaireInput } from "../../page/inputs/PageCreateWithoutQuestionnaireInput.input";
import { PageWhereUniqueInput } from "../../page/inputs/PageWhereUniqueInput.input";

@NestJsGraphQL.InputType('PageCreateNestedManyWithoutQuestionnaireInput', { isAbstract: true })
export class PageCreateNestedManyWithoutQuestionnaireInput {
  @NestJsGraphQL.Field(() => [PageCreateWithoutQuestionnaireInput], { nullable: true })
  create?: PageCreateWithoutQuestionnaireInput[] | undefined;

  @NestJsGraphQL.Field(() => [PageCreateOrConnectWithoutQuestionnaireInput], { nullable: true })
  connectOrCreate?: PageCreateOrConnectWithoutQuestionnaireInput[] | undefined;

  @NestJsGraphQL.Field(() => PageCreateManyQuestionnaireInputEnvelope, { nullable: true })
  createMany?: PageCreateManyQuestionnaireInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [PageWhereUniqueInput], { nullable: true })
  connect?: PageWhereUniqueInput[] | undefined;
}
