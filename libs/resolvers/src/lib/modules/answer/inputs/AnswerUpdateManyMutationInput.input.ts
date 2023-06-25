import * as NestJsGraphQL from '@nestjs/graphql';
import { AnswerUpdateanswersInput } from './AnswerUpdateanswersInput.input';

@NestJsGraphQL.InputType('AnswerUpdateManyMutationInput', { isAbstract: true })
export class AnswerUpdateManyMutationInput {
  @NestJsGraphQL.Field(() => AnswerUpdateanswersInput, { nullable: true })
  answers?: AnswerUpdateanswersInput | undefined;
}
