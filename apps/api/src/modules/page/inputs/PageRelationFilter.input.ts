import * as NestJsGraphQL from '@nestjs/graphql';
import { PageWhereInput } from './PageWhereInput.input';

@NestJsGraphQL.InputType('PageRelationFilter', { isAbstract: true })
export class PageRelationFilter {
  @NestJsGraphQL.Field(() => PageWhereInput, { nullable: true })
  is?: PageWhereInput | undefined;

  @NestJsGraphQL.Field(() => PageWhereInput, { nullable: true })
  isNot?: PageWhereInput | undefined;
}
