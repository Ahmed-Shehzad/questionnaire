import * as NestJsGraphQL from '@nestjs/graphql';
import { AnswerUpdateOneWithoutQuestionNestedInput } from '../../answer/inputs/AnswerUpdateOneWithoutQuestionNestedInput.input';
import { EnumQuestionTypeFieldUpdateOperationsInput } from '../../common/inputs/EnumQuestionTypeFieldUpdateOperationsInput.input';
import { NullableIntFieldUpdateOperationsInput } from '../../common/inputs/NullableIntFieldUpdateOperationsInput.input';
import { StringFieldUpdateOperationsInput } from '../../common/inputs/StringFieldUpdateOperationsInput.input';
import { QuestionUpdatechoicesInput } from './QuestionUpdatechoicesInput.input';

@NestJsGraphQL.InputType('QuestionUpdateWithoutPageInput', { isAbstract: true })
export class QuestionUpdateWithoutPageInput {
  @NestJsGraphQL.Field(() => EnumQuestionTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  type?: EnumQuestionTypeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  text?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => QuestionUpdatechoicesInput, { nullable: true })
  choices?: QuestionUpdatechoicesInput | undefined;

  @NestJsGraphQL.Field(() => AnswerUpdateOneWithoutQuestionNestedInput, {
    nullable: true,
  })
  answer?: AnswerUpdateOneWithoutQuestionNestedInput | undefined;

  @NestJsGraphQL.Field(() => NullableIntFieldUpdateOperationsInput, {
    nullable: true,
  })
  nextPageId?: NullableIntFieldUpdateOperationsInput | undefined;
}
