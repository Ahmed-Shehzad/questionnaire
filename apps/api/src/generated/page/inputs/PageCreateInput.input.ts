import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateNestedOneWithoutPredecessorInput } from "../../page/inputs/PageCreateNestedOneWithoutPredecessorInput.input";
import { PageCreateNestedOneWithoutSuccessorInput } from "../../page/inputs/PageCreateNestedOneWithoutSuccessorInput.input";
import { QuestionCreateNestedManyWithoutPageInput } from "../../question/inputs/QuestionCreateNestedManyWithoutPageInput.input";
import { QuestionnaireCreateNestedOneWithoutPagesInput } from "../../questionnaire/inputs/QuestionnaireCreateNestedOneWithoutPagesInput.input";

@NestJsGraphQL.InputType('PageCreateInput', { isAbstract: true })
export class PageCreateInput {
  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => QuestionCreateNestedManyWithoutPageInput, { nullable: true })
  questions?: QuestionCreateNestedManyWithoutPageInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireCreateNestedOneWithoutPagesInput)
  questionnaire!: QuestionnaireCreateNestedOneWithoutPagesInput;

  @NestJsGraphQL.Field(() => PageCreateNestedOneWithoutPredecessorInput, { nullable: true })
  successor?: PageCreateNestedOneWithoutPredecessorInput | undefined;

  @NestJsGraphQL.Field(() => PageCreateNestedOneWithoutSuccessorInput, { nullable: true })
  predecessor?: PageCreateNestedOneWithoutSuccessorInput | undefined;
}
