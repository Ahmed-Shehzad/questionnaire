import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PageService {
  constructor(private prisma: PrismaService) {}

  async findFirst(args: Prisma.PageFindFirstArgs) {
    return await this.prisma.page.findFirst(args);
  }

  findUnique(args: Prisma.PageFindUniqueArgs) {
    return this.prisma.page.findUnique(args);
  }

  findMany(args: Prisma.PageFindManyArgs) {
    return this.prisma.page.findMany(args);
  }

  groupBy(args: Prisma.PageGroupByArgs) {
    // @ts-ignore
    return this.prisma.page.groupBy(args);
  }

  aggregate(args: Prisma.PageAggregateArgs) {
    return this.prisma.page.aggregate(args);
  }

  create(args: Prisma.PageCreateArgs) {
    return this.prisma.page.create(args);
  }

  createMany(args: Prisma.PageCreateManyArgs) {
    return this.prisma.page.createMany(args);
  }

  update(args: Prisma.PageUpdateArgs) {
    return this.prisma.page.update(args);
  }

  updateMany(args: Prisma.PageUpdateManyArgs) {
    return this.prisma.page.updateMany(args);
  }

  upsert(args: Prisma.PageUpsertArgs) {
    return this.prisma.page.upsert(args);
  }

  delete(args: Prisma.PageDeleteArgs) {
    return this.prisma.page.delete(args);
  }

  deleteMany(args: Prisma.PageDeleteManyArgs) {
    return this.prisma.page.deleteMany(args);
  }
}
