import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionUpdateOneRequiredWithoutAnswerNestedInput } from '../../question/inputs/QuestionUpdateOneRequiredWithoutAnswerNestedInput.input';
import { AnswerUpdateanswersInput } from './AnswerUpdateanswersInput.input';

@NestJsGraphQL.InputType('AnswerUpdateInput', { isAbstract: true })
export class AnswerUpdateInput {
  @NestJsGraphQL.Field(
    () => QuestionUpdateOneRequiredWithoutAnswerNestedInput,
    { nullable: true }
  )
  Question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput | undefined;

  @NestJsGraphQL.Field(() => AnswerUpdateanswersInput, { nullable: true })
  answers?: AnswerUpdateanswersInput | undefined;
}
