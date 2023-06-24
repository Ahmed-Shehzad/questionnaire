import * as NestJsGraphQL from '@nestjs/graphql';
import { EnumQuestionTypeFieldUpdateOperationsInput } from '../../common/inputs/EnumQuestionTypeFieldUpdateOperationsInput.input';
import { NullableIntFieldUpdateOperationsInput } from '../../common/inputs/NullableIntFieldUpdateOperationsInput.input';
import { StringFieldUpdateOperationsInput } from '../../common/inputs/StringFieldUpdateOperationsInput.input';
import { QuestionUpdatechoicesInput } from './QuestionUpdatechoicesInput.input';

@NestJsGraphQL.InputType('QuestionUpdateManyMutationInput', {
  isAbstract: true,
})
export class QuestionUpdateManyMutationInput {
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

  @NestJsGraphQL.Field(() => NullableIntFieldUpdateOperationsInput, {
    nullable: true,
  })
  nextPageId?: NullableIntFieldUpdateOperationsInput | undefined;
}
