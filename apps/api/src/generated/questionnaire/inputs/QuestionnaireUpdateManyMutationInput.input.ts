import * as NestJsGraphQL from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";

@NestJsGraphQL.InputType('QuestionnaireUpdateManyMutationInput', { isAbstract: true })
export class QuestionnaireUpdateManyMutationInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;
}
