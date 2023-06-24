import * as NestJsGraphQL from "@nestjs/graphql";
import { QuestionCreateManyPageInput } from "../../question/inputs/QuestionCreateManyPageInput.input";

@NestJsGraphQL.InputType('QuestionCreateManyPageInputEnvelope', { isAbstract: true })
export class QuestionCreateManyPageInputEnvelope {
  @NestJsGraphQL.Field(() => [QuestionCreateManyPageInput])
  data!: QuestionCreateManyPageInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
