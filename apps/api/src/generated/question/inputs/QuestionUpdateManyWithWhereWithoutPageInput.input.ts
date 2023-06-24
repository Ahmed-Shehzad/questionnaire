import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionScalarWhereInput } from "../../question/inputs/QuestionScalarWhereInput.input";
import { QuestionUpdateManyMutationInput } from "../../question/inputs/QuestionUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('QuestionUpdateManyWithWhereWithoutPageInput', { isAbstract: true })
export class QuestionUpdateManyWithWhereWithoutPageInput {
  @NestJsGraphQL.Field(() => QuestionScalarWhereInput)
  where!: QuestionScalarWhereInput;

  @NestJsGraphQL.Field(() => QuestionUpdateManyMutationInput)
  data!: QuestionUpdateManyMutationInput;
}
