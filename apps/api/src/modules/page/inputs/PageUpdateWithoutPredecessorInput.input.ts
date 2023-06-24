import * as NestJsGraphQL from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../common/inputs/StringFieldUpdateOperationsInput.input';
import { QuestionUpdateManyWithoutPageNestedInput } from '../../question/inputs/QuestionUpdateManyWithoutPageNestedInput.input';
import { QuestionnaireUpdateOneRequiredWithoutPagesNestedInput } from '../../questionnaire/inputs/QuestionnaireUpdateOneRequiredWithoutPagesNestedInput.input';
import { PageUpdateOneWithoutPredecessorNestedInput } from './PageUpdateOneWithoutPredecessorNestedInput.input';

@NestJsGraphQL.InputType('PageUpdateWithoutPredecessorInput', {
  isAbstract: true,
})
export class PageUpdateWithoutPredecessorInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => QuestionUpdateManyWithoutPageNestedInput, {
    nullable: true,
  })
  questions?: QuestionUpdateManyWithoutPageNestedInput | undefined;

  @NestJsGraphQL.Field(
    () => QuestionnaireUpdateOneRequiredWithoutPagesNestedInput,
    { nullable: true }
  )
  questionnaire?:
    | QuestionnaireUpdateOneRequiredWithoutPagesNestedInput
    | undefined;

  @NestJsGraphQL.Field(() => PageUpdateOneWithoutPredecessorNestedInput, {
    nullable: true,
  })
  successor?: PageUpdateOneWithoutPredecessorNestedInput | undefined;
}
