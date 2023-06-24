import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Page } from '../models/page.model'
import { AggregatePage } from './outputs/AggregatePage.output'
import { PageGroupBy } from './outputs/PageGroupBy.output'
import {
  AggregatePageArgs,
  CreateManyPageArgs,
  CreateOnePageArgs,
  DeleteManyPageArgs,
  DeleteOnePageArgs,
  FindFirstPageArgs,
  FindManyPageArgs,
  FindUniquePageArgs,
  GroupByPageArgs,
  UpdateManyPageArgs,
  UpdateOnePageArgs,
  UpsertOnePageArgs
} from './page.args'
import { PageService } from './page.service'

@NestJsGraphql.Resolver(() => Page)
export class PageResolver {
  constructor(private readonly pageService: PageService) { }

  @NestJsGraphql.Query(() => Page, { nullable: false })
  findFirstPage(@NestJsGraphql.Args() args: FindFirstPageArgs) {
    return this.pageService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Page, { nullable: false })
  findUniquePage(@NestJsGraphql.Args() args: FindUniquePageArgs) {
    return this.pageService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Page], { nullable: false })
  findManyPage(@NestJsGraphql.Args() args: FindManyPageArgs) {
    return this.pageService.findMany(args)
  }

  @NestJsGraphql.Query(() => [PageGroupBy], { nullable: false })
  groupByPage(@NestJsGraphql.Args() args: GroupByPageArgs) {
    return this.pageService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregatePage, { nullable: false })
  aggregatePage(@NestJsGraphql.Args() args: AggregatePageArgs) {
    return this.pageService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Page, { nullable: true })
  createPage(@NestJsGraphql.Args() args: CreateOnePageArgs) {
    return this.pageService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyPage(@NestJsGraphql.Args() args: CreateManyPageArgs) {
    return this.pageService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Page, { nullable: true })
  updatePage(@NestJsGraphql.Args() args: UpdateOnePageArgs) {
    return this.pageService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyPage(@NestJsGraphql.Args() args: UpdateManyPageArgs) {
    return this.pageService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Page, { nullable: true })
  upsertPage(@NestJsGraphql.Args() args: UpsertOnePageArgs) {
    return this.pageService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Page, { nullable: true })
  deletePage(@NestJsGraphql.Args() args: DeleteOnePageArgs) {
    return this.pageService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyPage(@NestJsGraphql.Args() args: DeleteManyPageArgs) {
    return this.pageService.deleteMany(args)
  }
}

