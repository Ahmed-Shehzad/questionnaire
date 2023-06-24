import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionType } from "../../enums/QuestionType.enum";

@NestJsGraphQL.InputType('EnumQuestionTypeFieldUpdateOperationsInput', { isAbstract: true })
export class EnumQuestionTypeFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => QuestionType, { nullable: true })
  set?: "TEXT" | "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | undefined;
}
