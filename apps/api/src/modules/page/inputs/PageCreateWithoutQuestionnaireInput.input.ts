import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionCreateNestedManyWithoutPageInput } from '../../question/inputs/QuestionCreateNestedManyWithoutPageInput.input';
import { PageCreateNestedOneWithoutPredecessorInput } from './PageCreateNestedOneWithoutPredecessorInput.input';
import { PageCreateNestedOneWithoutSuccessorInput } from './PageCreateNestedOneWithoutSuccessorInput.input';

@NestJsGraphQL.InputType('PageCreateWithoutQuestionnaireInput', {
  isAbstract: true,
})
export class PageCreateWithoutQuestionnaireInput {
  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => QuestionCreateNestedManyWithoutPageInput, {
    nullable: true,
  })
  questions?: QuestionCreateNestedManyWithoutPageInput | undefined;

  @NestJsGraphQL.Field(() => PageCreateNestedOneWithoutPredecessorInput, {
    nullable: true,
  })
  successor?: PageCreateNestedOneWithoutPredecessorInput | undefined;

  @NestJsGraphQL.Field(() => PageCreateNestedOneWithoutSuccessorInput, {
    nullable: true,
  })
  predecessor?: PageCreateNestedOneWithoutSuccessorInput | undefined;
}
