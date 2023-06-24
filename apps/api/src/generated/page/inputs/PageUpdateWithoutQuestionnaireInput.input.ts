import * as NestJsGraphQL from "@nestjs/graphql";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { PageUpdateOneWithoutPredecessorNestedInput } from "../../page/inputs/PageUpdateOneWithoutPredecessorNestedInput.input";
import { PageUpdateOneWithoutSuccessorNestedInput } from "../../page/inputs/PageUpdateOneWithoutSuccessorNestedInput.input";
import { QuestionUpdateManyWithoutPageNestedInput } from "../../question/inputs/QuestionUpdateManyWithoutPageNestedInput.input";

@NestJsGraphQL.InputType('PageUpdateWithoutQuestionnaireInput', { isAbstract: true })
export class PageUpdateWithoutQuestionnaireInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => QuestionUpdateManyWithoutPageNestedInput, { nullable: true })
  questions?: QuestionUpdateManyWithoutPageNestedInput | undefined;

  @NestJsGraphQL.Field(() => PageUpdateOneWithoutPredecessorNestedInput, { nullable: true })
  successor?: PageUpdateOneWithoutPredecessorNestedInput | undefined;

  @NestJsGraphQL.Field(() => PageUpdateOneWithoutSuccessorNestedInput, { nullable: true })
  predecessor?: PageUpdateOneWithoutSuccessorNestedInput | undefined;
}
