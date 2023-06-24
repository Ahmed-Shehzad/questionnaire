import * as NestJsGraphQL from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { PageUpdateOneWithoutPredecessorNestedInput } from "../../page/inputs/PageUpdateOneWithoutPredecessorNestedInput.input";
import { PageUpdateOneWithoutSuccessorNestedInput } from "../../page/inputs/PageUpdateOneWithoutSuccessorNestedInput.input";
import { QuestionnaireUpdateOneRequiredWithoutPagesNestedInput } from "../../questionnaire/inputs/QuestionnaireUpdateOneRequiredWithoutPagesNestedInput.input";

@NestJsGraphQL.InputType('PageUpdateWithoutQuestionsInput', { isAbstract: true })
export class PageUpdateWithoutQuestionsInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireUpdateOneRequiredWithoutPagesNestedInput, { nullable: true })
  questionnaire?: QuestionnaireUpdateOneRequiredWithoutPagesNestedInput | undefined;

  @NestJsGraphQL.Field(() => PageUpdateOneWithoutPredecessorNestedInput, { nullable: true })
  successor?: PageUpdateOneWithoutPredecessorNestedInput | undefined;

  @NestJsGraphQL.Field(() => PageUpdateOneWithoutSuccessorNestedInput, { nullable: true })
  predecessor?: PageUpdateOneWithoutSuccessorNestedInput | undefined;
}
