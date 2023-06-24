import * as NestJsGraphql from '@nestjs/graphql';
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output';
import { Question } from '../models/question.model';
import { AggregateQuestion } from './outputs/AggregateQuestion.output';
import { QuestionGroupBy } from './outputs/QuestionGroupBy.output';
import {
  AggregateQuestionArgs,
  CreateManyQuestionArgs,
  CreateOneQuestionArgs,
  DeleteManyQuestionArgs,
  DeleteOneQuestionArgs,
  FindFirstQuestionArgs,
  FindManyQuestionArgs,
  FindUniqueQuestionArgs,
  GroupByQuestionArgs,
  UpdateManyQuestionArgs,
  UpdateOneQuestionArgs,
  UpsertOneQuestionArgs,
} from './question.args';
import { QuestionService } from './question.service';

@NestJsGraphql.Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @NestJsGraphql.Query(() => Question, { nullable: false })
  findFirstQuestion(@NestJsGraphql.Args() args: FindFirstQuestionArgs) {
    return this.questionService.findFirst(args);
  }

  @NestJsGraphql.Query(() => Question, { nullable: false })
  findUniqueQuestion(@NestJsGraphql.Args() args: FindUniqueQuestionArgs) {
    return this.questionService.findUnique(args);
  }

  @NestJsGraphql.Query(() => [Question], { nullable: false })
  findManyQuestion(@NestJsGraphql.Args() args: FindManyQuestionArgs) {
    return this.questionService.findMany(args);
  }

  @NestJsGraphql.Query(() => [QuestionGroupBy], { nullable: false })
  groupByQuestion(@NestJsGraphql.Args() args: GroupByQuestionArgs) {
    return this.questionService.groupBy(args);
  }

  @NestJsGraphql.Query(() => AggregateQuestion, { nullable: false })
  aggregateQuestion(@NestJsGraphql.Args() args: AggregateQuestionArgs) {
    return this.questionService.aggregate(args);
  }

  @NestJsGraphql.Mutation(() => Question, { nullable: true })
  createQuestion(@NestJsGraphql.Args() args: CreateOneQuestionArgs) {
    return this.questionService.create(args);
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyQuestion(@NestJsGraphql.Args() args: CreateManyQuestionArgs) {
    return this.questionService.createMany(args);
  }

  @NestJsGraphql.Mutation(() => Question, { nullable: true })
  updateQuestion(@NestJsGraphql.Args() args: UpdateOneQuestionArgs) {
    return this.questionService.update(args);
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyQuestion(@NestJsGraphql.Args() args: UpdateManyQuestionArgs) {
    return this.questionService.updateMany(args);
  }

  @NestJsGraphql.Mutation(() => Question, { nullable: true })
  upsertQuestion(@NestJsGraphql.Args() args: UpsertOneQuestionArgs) {
    return this.questionService.upsert(args);
  }

  @NestJsGraphql.Mutation(() => Question, { nullable: true })
  deleteQuestion(@NestJsGraphql.Args() args: DeleteOneQuestionArgs) {
    return this.questionService.delete(args);
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyQuestion(@NestJsGraphql.Args() args: DeleteManyQuestionArgs) {
    return this.questionService.deleteMany(args);
  }
}
