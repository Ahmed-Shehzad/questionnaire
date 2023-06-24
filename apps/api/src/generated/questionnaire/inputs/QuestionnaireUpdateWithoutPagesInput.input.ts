import * as NestJsGraphQL from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";

@NestJsGraphQL.InputType('QuestionnaireUpdateWithoutPagesInput', { isAbstract: true })
export class QuestionnaireUpdateWithoutPagesInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;
}
