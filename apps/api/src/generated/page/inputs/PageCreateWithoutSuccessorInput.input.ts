import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateNestedOneWithoutSuccessorInput } from "../../page/inputs/PageCreateNestedOneWithoutSuccessorInput.input";
import { QuestionCreateNestedManyWithoutPageInput } from "../../question/inputs/QuestionCreateNestedManyWithoutPageInput.input";
import { QuestionnaireCreateNestedOneWithoutPagesInput } from "../../questionnaire/inputs/QuestionnaireCreateNestedOneWithoutPagesInput.input";

@NestJsGraphQL.InputType('PageCreateWithoutSuccessorInput', { isAbstract: true })
export class PageCreateWithoutSuccessorInput {
  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => QuestionCreateNestedManyWithoutPageInput, { nullable: true })
  questions?: QuestionCreateNestedManyWithoutPageInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireCreateNestedOneWithoutPagesInput)
  questionnaire!: QuestionnaireCreateNestedOneWithoutPagesInput;

  @NestJsGraphQL.Field(() => PageCreateNestedOneWithoutSuccessorInput, { nullable: true })
  predecessor?: PageCreateNestedOneWithoutSuccessorInput | undefined;
}
