import * as NestJsGraphQL from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { PageUpdateManyWithoutQuestionnaireNestedInput } from "../../page/inputs/PageUpdateManyWithoutQuestionnaireNestedInput.input";

@NestJsGraphQL.InputType('QuestionnaireUpdateInput', { isAbstract: true })
export class QuestionnaireUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => PageUpdateManyWithoutQuestionnaireNestedInput, { nullable: true })
  pages?: PageUpdateManyWithoutQuestionnaireNestedInput | undefined;
}
