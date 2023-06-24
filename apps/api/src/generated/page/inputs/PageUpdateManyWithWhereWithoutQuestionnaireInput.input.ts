import * as NestJsGraphQL from "@nestjs/graphql";
import { PageScalarWhereInput } from "../../page/inputs/PageScalarWhereInput.input";
import { PageUpdateManyMutationInput } from "../../page/inputs/PageUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('PageUpdateManyWithWhereWithoutQuestionnaireInput', { isAbstract: true })
export class PageUpdateManyWithWhereWithoutQuestionnaireInput {
  @NestJsGraphQL.Field(() => PageScalarWhereInput)
  where!: PageScalarWhereInput;

  @NestJsGraphQL.Field(() => PageUpdateManyMutationInput)
  data!: PageUpdateManyMutationInput;
}
