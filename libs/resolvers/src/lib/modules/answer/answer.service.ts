import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class AnswerService {
  constructor(private prisma: PrismaService) {}

  async findFirst(args: Prisma.AnswerFindFirstArgs) {
    return await this.prisma.answer.findFirst(args);
  }

  findUnique(args: Prisma.AnswerFindUniqueArgs) {
    return this.prisma.answer.findUnique(args);
  }

  findMany(args: Prisma.AnswerFindManyArgs) {
    return this.prisma.answer.findMany(args);
  }

  groupBy(args: Prisma.AnswerGroupByArgs) {
    // @ts-ignore
    return this.prisma.answer.groupBy(args);
  }

  aggregate(args: Prisma.AnswerAggregateArgs) {
    return this.prisma.answer.aggregate(args);
  }

  create(args: Prisma.AnswerCreateArgs) {
    return this.prisma.answer.create(args);
  }

  createMany(args: Prisma.AnswerCreateManyArgs) {
    return this.prisma.answer.createMany(args);
  }

  update(args: Prisma.AnswerUpdateArgs) {
    return this.prisma.answer.update(args);
  }

  updateMany(args: Prisma.AnswerUpdateManyArgs) {
    return this.prisma.answer.updateMany(args);
  }

  upsert(args: Prisma.AnswerUpsertArgs) {
    return this.prisma.answer.upsert(args);
  }

  delete(args: Prisma.AnswerDeleteArgs) {
    return this.prisma.answer.delete(args);
  }

  deleteMany(args: Prisma.AnswerDeleteManyArgs) {
    return this.prisma.answer.deleteMany(args);
  }
}
