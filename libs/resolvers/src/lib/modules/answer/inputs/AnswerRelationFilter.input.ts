import * as NestJsGraphQL from '@nestjs/graphql';
import { AnswerWhereInput } from './AnswerWhereInput.input';

@NestJsGraphQL.InputType('AnswerRelationFilter', { isAbstract: true })
export class AnswerRelationFilter {
  @NestJsGraphQL.Field(() => AnswerWhereInput, { nullable: true })
  is?: AnswerWhereInput | undefined;

  @NestJsGraphQL.Field(() => AnswerWhereInput, { nullable: true })
  isNot?: AnswerWhereInput | undefined;
}
