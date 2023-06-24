import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateNestedOneWithoutPredecessorInput } from "../../page/inputs/PageCreateNestedOneWithoutPredecessorInput.input";
import { QuestionCreateNestedManyWithoutPageInput } from "../../question/inputs/QuestionCreateNestedManyWithoutPageInput.input";
import { QuestionnaireCreateNestedOneWithoutPagesInput } from "../../questionnaire/inputs/QuestionnaireCreateNestedOneWithoutPagesInput.input";

@NestJsGraphQL.InputType('PageCreateWithoutPredecessorInput', { isAbstract: true })
export class PageCreateWithoutPredecessorInput {
  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => QuestionCreateNestedManyWithoutPageInput, { nullable: true })
  questions?: QuestionCreateNestedManyWithoutPageInput | undefined;

  @NestJsGraphQL.Field(() => QuestionnaireCreateNestedOneWithoutPagesInput)
  questionnaire!: QuestionnaireCreateNestedOneWithoutPagesInput;

  @NestJsGraphQL.Field(() => PageCreateNestedOneWithoutPredecessorInput, { nullable: true })
  successor?: PageCreateNestedOneWithoutPredecessorInput | undefined;
}
