import * as NestJsGraphQL from "@nestjs/graphql";
import { PageCreateOrConnectWithoutPredecessorInput } from "../../page/inputs/PageCreateOrConnectWithoutPredecessorInput.input";
import { PageCreateWithoutPredecessorInput } from "../../page/inputs/PageCreateWithoutPredecessorInput.input";
import { PageWhereUniqueInput } from "../../page/inputs/PageWhereUniqueInput.input";

@NestJsGraphQL.InputType('PageCreateNestedOneWithoutPredecessorInput', { isAbstract: true })
export class PageCreateNestedOneWithoutPredecessorInput {
  @NestJsGraphQL.Field(() => PageCreateWithoutPredecessorInput, { nullable: true })
  create?: PageCreateWithoutPredecessorInput | undefined;

  @NestJsGraphQL.Field(() => PageCreateOrConnectWithoutPredecessorInput, { nullable: true })
  connectOrCreate?: PageCreateOrConnectWithoutPredecessorInput | undefined;

  @NestJsGraphQL.Field(() => PageWhereUniqueInput, { nullable: true })
  connect?: PageWhereUniqueInput | undefined;
}
