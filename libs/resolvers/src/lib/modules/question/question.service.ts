import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../../../../apps/api/src/prisma.service';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}
  async findFirst(args: Prisma.QuestionFindFirstArgs) {
    return await this.prisma.question.findFirst(args);
  }

  findUnique(args: Prisma.QuestionFindUniqueArgs) {
    return this.prisma.question.findUnique(args);
  }

  findMany(args: Prisma.QuestionFindManyArgs) {
    return this.prisma.question.findMany(args);
  }

  groupBy(args: Prisma.QuestionGroupByArgs) {
    // @ts-ignore
    return this.prisma.question.groupBy(args);
  }

  aggregate(args: Prisma.QuestionAggregateArgs) {
    return this.prisma.question.aggregate(args);
  }

  create(args: Prisma.QuestionCreateArgs) {
    return this.prisma.question.create(args);
  }

  createMany(args: Prisma.QuestionCreateManyArgs) {
    return this.prisma.question.createMany(args);
  }

  update(args: Prisma.QuestionUpdateArgs) {
    return this.prisma.question.update(args);
  }

  updateMany(args: Prisma.QuestionUpdateManyArgs) {
    return this.prisma.question.updateMany(args);
  }

  upsert(args: Prisma.QuestionUpsertArgs) {
    return this.prisma.question.upsert(args);
  }

  delete(args: Prisma.QuestionDeleteArgs) {
    return this.prisma.question.delete(args);
  }

  deleteMany(args: Prisma.QuestionDeleteManyArgs) {
    return this.prisma.question.deleteMany(args);
  }
}
