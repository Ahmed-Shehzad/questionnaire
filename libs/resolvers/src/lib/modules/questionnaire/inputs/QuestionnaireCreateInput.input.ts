import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateNestedManyWithoutQuestionnaireInput } from "../../page/inputs/PageCreateNestedManyWithoutQuestionnaireInput.input";

@NestJsGraphQL.InputType('QuestionnaireCreateInput', { isAbstract: true })
export class QuestionnaireCreateInput {
  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => PageCreateNestedManyWithoutQuestionnaireInput, { nullable: true })
  pages?: PageCreateNestedManyWithoutQuestionnaireInput | undefined;
}
