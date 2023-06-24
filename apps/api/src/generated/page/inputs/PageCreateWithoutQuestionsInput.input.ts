import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateNestedOneWithoutPredecessorInput } from "../../page/inputs/PageCreateNestedOneWithoutPredecessorInput.input";
import { PageCreateNestedOneWithoutSuccessorInput } from "../../page/inputs/PageCreateNestedOneWithoutSuccessorInput.input";
import { QuestionnaireCreateNestedOneWithoutPagesInput } from "../../questionnaire/inputs/QuestionnaireCreateNestedOneWithoutPagesInput.input";

@NestJsGraphQL.InputType('PageCreateWithoutQuestionsInput', { isAbstract: true })
export class PageCreateWithoutQuestionsInput {
  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => QuestionnaireCreateNestedOneWithoutPagesInput)
  questionnaire!: QuestionnaireCreateNestedOneWithoutPagesInput;

  @NestJsGraphQL.Field(() => PageCreateNestedOneWithoutPredecessorInput, { nullable: true })
  successor?: PageCreateNestedOneWithoutPredecessorInput | undefined;

  @NestJsGraphQL.Field(() => PageCreateNestedOneWithoutSuccessorInput, { nullable: true })
  predecessor?: PageCreateNestedOneWithoutSuccessorInput | undefined;
}
