import * as NestJsGraphQL from '@nestjs/graphql';
import { QuestionnaireCreateOrConnectWithoutPagesInput } from './QuestionnaireCreateOrConnectWithoutPagesInput.input';
import { QuestionnaireCreateWithoutPagesInput } from './QuestionnaireCreateWithoutPagesInput.input';
import { QuestionnaireUpdateWithoutPagesInput } from './QuestionnaireUpdateWithoutPagesInput.input';
import { QuestionnaireUpsertWithoutPagesInput } from './QuestionnaireUpsertWithoutPagesInput.input';
import { QuestionnaireWhereUniqueInput } from './QuestionnaireWhereUniqueInput.input';

@NestJsGraphQL.InputType(
  'QuestionnaireUpdateOneRequiredWithoutPagesNestedInput',
  { isAbstract: true }
)
export class QuestionnaireUpdateOneRequiredWithoutPagesNestedInput {
  @NestJsGraphQL.Field(() => QuestionnaireCreateWithoutPagesInput, {
    nullable: true,
  })
  create?: QuestionnaireCreateWithoutPagesInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireCreateOrConnectWithoutPagesInput, {
    nullable: true,
  })
  connectOrCreate?: QuestionnaireCreateOrConnectWithoutPagesInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireUpsertWithoutPagesInput, {
    nullable: true,
  })
  upsert?: QuestionnaireUpsertWithoutPagesInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireWhereUniqueInput, { nullable: true })
  connect?: QuestionnaireWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireUpdateWithoutPagesInput, {
    nullable: true,
  })
  update?: QuestionnaireUpdateWithoutPagesInput | undefined;
}
