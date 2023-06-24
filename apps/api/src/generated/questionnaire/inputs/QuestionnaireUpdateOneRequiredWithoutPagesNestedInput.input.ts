import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionnaireCreateOrConnectWithoutPagesInput } from "../../questionnaire/inputs/QuestionnaireCreateOrConnectWithoutPagesInput.input";
import { QuestionnaireCreateWithoutPagesInput } from "../../questionnaire/inputs/QuestionnaireCreateWithoutPagesInput.input";
import { QuestionnaireUpdateWithoutPagesInput } from "../../questionnaire/inputs/QuestionnaireUpdateWithoutPagesInput.input";
import { QuestionnaireUpsertWithoutPagesInput } from "../../questionnaire/inputs/QuestionnaireUpsertWithoutPagesInput.input";
import { QuestionnaireWhereUniqueInput } from "../../questionnaire/inputs/QuestionnaireWhereUniqueInput.input";

@NestJsGraphQL.InputType('QuestionnaireUpdateOneRequiredWithoutPagesNestedInput', { isAbstract: true })
export class QuestionnaireUpdateOneRequiredWithoutPagesNestedInput {
  @NestJsGraphQL.Field(() => QuestionnaireCreateWithoutPagesInput, { nullable: true })
  create?: QuestionnaireCreateWithoutPagesInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireCreateOrConnectWithoutPagesInput, { nullable: true })
  connectOrCreate?: QuestionnaireCreateOrConnectWithoutPagesInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireUpsertWithoutPagesInput, { nullable: true })
  upsert?: QuestionnaireUpsertWithoutPagesInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireWhereUniqueInput, { nullable: true })
  connect?: QuestionnaireWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireUpdateWithoutPagesInput, { nullable: true })
  update?: QuestionnaireUpdateWithoutPagesInput | undefined;
}
