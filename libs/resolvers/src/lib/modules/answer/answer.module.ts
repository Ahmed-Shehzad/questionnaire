import { Module } from '@nestjs/common';
import { PrismaService } from '../../../../../../apps/api/src/prisma.service';
import { AnswerResolver } from './answer.resolver';
import { AnswerService } from './answer.service';

@Module({
  providers: [AnswerResolver, AnswerService, PrismaService],
})
export class AnswerModule {}
