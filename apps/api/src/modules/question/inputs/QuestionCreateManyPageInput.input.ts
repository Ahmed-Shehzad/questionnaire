import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionType } from '../../enums/QuestionType.enum';
import { QuestionCreatechoicesInput } from './QuestionCreatechoicesInput.input';

@NestJsGraphQL.InputType('QuestionCreateManyPageInput', { isAbstract: true })
export class QuestionCreateManyPageInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => QuestionType)
  type!: 'TEXT' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';

  @NestJsGraphQL.Field(() => String)
  text!: string;

  @NestJsGraphQL.Field(() => QuestionCreatechoicesInput, { nullable: true })
  choices?: QuestionCreatechoicesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  nextPageId?: number | undefined;
}
