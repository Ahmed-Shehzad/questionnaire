import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateOrConnectWithoutPredecessorInput } from "../../page/inputs/PageCreateOrConnectWithoutPredecessorInput.input";
import { PageCreateWithoutPredecessorInput } from "../../page/inputs/PageCreateWithoutPredecessorInput.input";
import { PageUpdateWithoutPredecessorInput } from "../../page/inputs/PageUpdateWithoutPredecessorInput.input";
import { PageUpsertWithoutPredecessorInput } from "../../page/inputs/PageUpsertWithoutPredecessorInput.input";
import { PageWhereUniqueInput } from "../../page/inputs/PageWhereUniqueInput.input";

@NestJsGraphQL.InputType('PageUpdateOneWithoutPredecessorNestedInput', { isAbstract: true })
export class PageUpdateOneWithoutPredecessorNestedInput {
  @NestJsGraphQL.Field(() => PageCreateWithoutPredecessorInput, { nullable: true })
  create?: PageCreateWithoutPredecessorInput | undefined;

  @NestJsGraphQL.Field(() => PageCreateOrConnectWithoutPredecessorInput, { nullable: true })
  connectOrCreate?: PageCreateOrConnectWithoutPredecessorInput | undefined;

  @NestJsGraphQL.Field(() => PageUpsertWithoutPredecessorInput, { nullable: true })
  upsert?: PageUpsertWithoutPredecessorInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => PageWhereUniqueInput, { nullable: true })
  connect?: PageWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => PageUpdateWithoutPredecessorInput, { nullable: true })
  update?: PageUpdateWithoutPredecessorInput | undefined;
}
