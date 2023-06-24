import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionCreateNestedOneWithoutAnswerInput } from '../../question/inputs/QuestionCreateNestedOneWithoutAnswerInput.input';
import { AnswerCreateanswersInput } from './AnswerCreateanswersInput.input';

@NestJsGraphQL.InputType('AnswerCreateInput', { isAbstract: true })
export class AnswerCreateInput {
  @NestJsGraphQL.Field(() => QuestionCreateNestedOneWithoutAnswerInput)
  Question!: QuestionCreateNestedOneWithoutAnswerInput;

  @NestJsGraphQL.Field(() => AnswerCreateanswersInput, { nullable: true })
  answers?: AnswerCreateanswersInput | undefined;
}
