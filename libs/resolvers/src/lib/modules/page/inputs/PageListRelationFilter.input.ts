import * as NestJsGraphQL from '@nestjs/graphql';
import { PageWhereInput } from './PageWhereInput.input';

@NestJsGraphQL.InputType('PageListRelationFilter', { isAbstract: true })
export class PageListRelationFilter {
  @NestJsGraphQL.Field(() => PageWhereInput, { nullable: true })
  every?: PageWhereInput | undefined;

  @NestJsGraphQL.Field(() => PageWhereInput, { nullable: true })
  some?: PageWhereInput | undefined;

  @NestJsGraphQL.Field(() => PageWhereInput, { nullable: true })
  none?: PageWhereInput | undefined;
}
