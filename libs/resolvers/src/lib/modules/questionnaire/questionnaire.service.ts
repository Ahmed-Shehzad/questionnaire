/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../../../../apps/api/src/prisma.service';

@Injectable()
export class QuestionnaireService {
  constructor(private prisma: PrismaService) {}

  async findFirst(args: Prisma.QuestionnaireFindFirstArgs) {
    return await this.prisma.questionnaire.findFirst(args);
  }

  findUnique(args: Prisma.QuestionnaireFindUniqueArgs) {
    return this.prisma.questionnaire.findUnique(args);
  }

  findMany(args: Prisma.QuestionnaireFindManyArgs) {
    return this.prisma.questionnaire.findMany(args);
  }

  groupBy(args: Prisma.QuestionnaireGroupByArgs) {
    // @ts-ignore
    return this.prisma.questionnaire.groupBy(args);
  }

  aggregate(args: Prisma.QuestionnaireAggregateArgs) {
    return this.prisma.questionnaire.aggregate(args);
  }

  create(args: Prisma.QuestionnaireCreateArgs) {
    return this.prisma.questionnaire.create(args);
  }

  createMany(args: Prisma.QuestionnaireCreateManyArgs) {
    return this.prisma.questionnaire.createMany(args);
  }

  update(args: Prisma.QuestionnaireUpdateArgs) {
    return this.prisma.questionnaire.update(args);
  }

  updateMany(args: Prisma.QuestionnaireUpdateManyArgs) {
    return this.prisma.questionnaire.updateMany(args);
  }

  upsert(args: Prisma.QuestionnaireUpsertArgs) {
    return this.prisma.questionnaire.upsert(args);
  }

  delete(args: Prisma.QuestionnaireDeleteArgs) {
    return this.prisma.questionnaire.delete(args);
  }

  deleteMany(args: Prisma.QuestionnaireDeleteManyArgs) {
    return this.prisma.questionnaire.deleteMany(args);
  }
}
