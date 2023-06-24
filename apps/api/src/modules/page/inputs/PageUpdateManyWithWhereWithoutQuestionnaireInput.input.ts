import * as NestJsGraphQL from '@nestjs/graphql';
import { PageScalarWhereInput } from './PageScalarWhereInput.input';
import { PageUpdateManyMutationInput } from './PageUpdateManyMutationInput.input';

@NestJsGraphQL.InputType('PageUpdateManyWithWhereWithoutQuestionnaireInput', {
  isAbstract: true,
})
export class PageUpdateManyWithWhereWithoutQuestionnaireInput {
  @NestJsGraphQL.Field(() => PageScalarWhereInput)
  where!: PageScalarWhereInput;

  @NestJsGraphQL.Field(() => PageUpdateManyMutationInput)
  data!: PageUpdateManyMutationInput;
}
