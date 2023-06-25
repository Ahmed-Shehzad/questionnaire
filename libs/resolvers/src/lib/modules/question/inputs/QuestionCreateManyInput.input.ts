import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionType } from '../../enums/QuestionType.enum';
import { QuestionCreatechoicesInput } from './QuestionCreatechoicesInput.input';

@NestJsGraphQL.InputType('QuestionCreateManyInput', { isAbstract: true })
export class QuestionCreateManyInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  pageId!: number;

  @NestJsGraphQL.Field(() => QuestionType)
  type!: 'TEXT' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';

  @NestJsGraphQL.Field(() => String)
  text!: string;

  @NestJsGraphQL.Field(() => QuestionCreatechoicesInput, { nullable: true })
  choices?: QuestionCreatechoicesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  nextPageId?: number | undefined;
}
