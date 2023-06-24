import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Questionnaire } from '../models/questionnaire.model'
import { AggregateQuestionnaire } from './outputs/AggregateQuestionnaire.output'
import { QuestionnaireGroupBy } from './outputs/QuestionnaireGroupBy.output'
import {
  AggregateQuestionnaireArgs,
  CreateManyQuestionnaireArgs,
  CreateOneQuestionnaireArgs,
  DeleteManyQuestionnaireArgs,
  DeleteOneQuestionnaireArgs,
  FindFirstQuestionnaireArgs,
  FindManyQuestionnaireArgs,
  FindUniqueQuestionnaireArgs,
  GroupByQuestionnaireArgs,
  UpdateManyQuestionnaireArgs,
  UpdateOneQuestionnaireArgs,
  UpsertOneQuestionnaireArgs
} from './questionnaire.args'
import { QuestionnaireService } from './questionnaire.service'

@NestJsGraphql.Resolver(() => Questionnaire)
export class QuestionnaireResolver {
  constructor(private readonly questionnaireService: QuestionnaireService) { }

  @NestJsGraphql.Query(() => Questionnaire, { nullable: false })
  findFirstQuestionnaire(@NestJsGraphql.Args() args: FindFirstQuestionnaireArgs) {
    return this.questionnaireService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Questionnaire, { nullable: false })
  findUniqueQuestionnaire(@NestJsGraphql.Args() args: FindUniqueQuestionnaireArgs) {
    return this.questionnaireService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Questionnaire], { nullable: false })
  findManyQuestionnaire(@NestJsGraphql.Args() args: FindManyQuestionnaireArgs) {
    return this.questionnaireService.findMany(args)
  }

  @NestJsGraphql.Query(() => [QuestionnaireGroupBy], { nullable: false })
  groupByQuestionnaire(@NestJsGraphql.Args() args: GroupByQuestionnaireArgs) {
    return this.questionnaireService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateQuestionnaire, { nullable: false })
  aggregateQuestionnaire(@NestJsGraphql.Args() args: AggregateQuestionnaireArgs) {
    return this.questionnaireService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Questionnaire, { nullable: true })
  createQuestionnaire(@NestJsGraphql.Args() args: CreateOneQuestionnaireArgs) {
    return this.questionnaireService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyQuestionnaire(@NestJsGraphql.Args() args: CreateManyQuestionnaireArgs) {
    return this.questionnaireService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Questionnaire, { nullable: true })
  updateQuestionnaire(@NestJsGraphql.Args() args: UpdateOneQuestionnaireArgs) {
    return this.questionnaireService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyQuestionnaire(@NestJsGraphql.Args() args: UpdateManyQuestionnaireArgs) {
    return this.questionnaireService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Questionnaire, { nullable: true })
  upsertQuestionnaire(@NestJsGraphql.Args() args: UpsertOneQuestionnaireArgs) {
    return this.questionnaireService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Questionnaire, { nullable: true })
  deleteQuestionnaire(@NestJsGraphql.Args() args: DeleteOneQuestionnaireArgs) {
    return this.questionnaireService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyQuestionnaire(@NestJsGraphql.Args() args: DeleteManyQuestionnaireArgs) {
    return this.questionnaireService.deleteMany(args)
  }
}

