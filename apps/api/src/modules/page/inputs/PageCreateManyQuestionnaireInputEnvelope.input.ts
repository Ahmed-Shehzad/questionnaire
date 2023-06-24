import * as NestJsGraphQL from '@nestjs/graphql';
import { PageCreateManyQuestionnaireInput } from './PageCreateManyQuestionnaireInput.input';

@NestJsGraphQL.InputType('PageCreateManyQuestionnaireInputEnvelope', {
  isAbstract: true,
})
export class PageCreateManyQuestionnaireInputEnvelope {
  @NestJsGraphQL.Field(() => [PageCreateManyQuestionnaireInput])
  data!: PageCreateManyQuestionnaireInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
