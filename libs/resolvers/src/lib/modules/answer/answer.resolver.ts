import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Answer } from '../models/answer.model'
import {
  AggregateAnswerArgs,
  CreateManyAnswerArgs,
  CreateOneAnswerArgs,
  DeleteManyAnswerArgs,
  DeleteOneAnswerArgs,
  FindFirstAnswerArgs,
  FindManyAnswerArgs,
  FindUniqueAnswerArgs,
  GroupByAnswerArgs,
  UpdateManyAnswerArgs,
  UpdateOneAnswerArgs,
  UpsertOneAnswerArgs
} from './answer.args'
import { AnswerService } from './answer.service'
import { AggregateAnswer } from './outputs/AggregateAnswer.output'
import { AnswerGroupBy } from './outputs/AnswerGroupBy.output'

@NestJsGraphql.Resolver(() => Answer)
export class AnswerResolver {
  constructor(private readonly answerService: AnswerService) { }

  @NestJsGraphql.Query(() => Answer, { nullable: false })
  findFirstAnswer(@NestJsGraphql.Args() args: FindFirstAnswerArgs) {
    return this.answerService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Answer, { nullable: false })
  findUniqueAnswer(@NestJsGraphql.Args() args: FindUniqueAnswerArgs) {
    return this.answerService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Answer], { nullable: false })
  findManyAnswer(@NestJsGraphql.Args() args: FindManyAnswerArgs) {
    return this.answerService.findMany(args)
  }

  @NestJsGraphql.Query(() => [AnswerGroupBy], { nullable: false })
  groupByAnswer(@NestJsGraphql.Args() args: GroupByAnswerArgs) {
    return this.answerService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateAnswer, { nullable: false })
  aggregateAnswer(@NestJsGraphql.Args() args: AggregateAnswerArgs) {
    return this.answerService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Answer, { nullable: true })
  createAnswer(@NestJsGraphql.Args() args: CreateOneAnswerArgs) {
    return this.answerService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyAnswer(@NestJsGraphql.Args() args: CreateManyAnswerArgs) {
    return this.answerService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Answer, { nullable: true })
  updateAnswer(@NestJsGraphql.Args() args: UpdateOneAnswerArgs) {
    return this.answerService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyAnswer(@NestJsGraphql.Args() args: UpdateManyAnswerArgs) {
    return this.answerService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Answer, { nullable: true })
  upsertAnswer(@NestJsGraphql.Args() args: UpsertOneAnswerArgs) {
    return this.answerService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Answer, { nullable: true })
  deleteAnswer(@NestJsGraphql.Args() args: DeleteOneAnswerArgs) {
    return this.answerService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyAnswer(@NestJsGraphql.Args() args: DeleteManyAnswerArgs) {
    return this.answerService.deleteMany(args)
  }
}

