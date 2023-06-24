import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateOrConnectWithoutSuccessorInput } from "../../page/inputs/PageCreateOrConnectWithoutSuccessorInput.input";
import { PageCreateWithoutSuccessorInput } from "../../page/inputs/PageCreateWithoutSuccessorInput.input";
import { PageUpdateWithoutSuccessorInput } from "../../page/inputs/PageUpdateWithoutSuccessorInput.input";
import { PageUpsertWithoutSuccessorInput } from "../../page/inputs/PageUpsertWithoutSuccessorInput.input";
import { PageWhereUniqueInput } from "../../page/inputs/PageWhereUniqueInput.input";

@NestJsGraphQL.InputType('PageUpdateOneWithoutSuccessorNestedInput', { isAbstract: true })
export class PageUpdateOneWithoutSuccessorNestedInput {
  @NestJsGraphQL.Field(() => PageCreateWithoutSuccessorInput, { nullable: true })
  create?: PageCreateWithoutSuccessorInput | undefined;

  @NestJsGraphQL.Field(() => PageCreateOrConnectWithoutSuccessorInput, { nullable: true })
  connectOrCreate?: PageCreateOrConnectWithoutSuccessorInput | undefined;

  @NestJsGraphQL.Field(() => PageUpsertWithoutSuccessorInput, { nullable: true })
  upsert?: PageUpsertWithoutSuccessorInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => PageWhereUniqueInput, { nullable: true })
  connect?: PageWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => PageUpdateWithoutSuccessorInput, { nullable: true })
  update?: PageUpdateWithoutSuccessorInput | undefined;
}
