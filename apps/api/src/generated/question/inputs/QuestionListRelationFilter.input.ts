import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionWhereInput } from "../../question/inputs/QuestionWhereInput.input";

@NestJsGraphQL.InputType('QuestionListRelationFilter', { isAbstract: true })
export class QuestionListRelationFilter {
  @NestJsGraphQL.Field(() => QuestionWhereInput, { nullable: true })
  every?: QuestionWhereInput | undefined;

  @NestJsGraphQL.Field(() => QuestionWhereInput, { nullable: true })
  some?: QuestionWhereInput | undefined;

  @NestJsGraphQL.Field(() => QuestionWhereInput, { nullable: true })
  none?: QuestionWhereInput | undefined;
}
