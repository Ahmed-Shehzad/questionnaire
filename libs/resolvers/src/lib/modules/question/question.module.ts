import { Module } from '@nestjs/common';
import { PrismaService } from '../../../../../../apps/api/src/prisma.service';
import { QuestionResolver } from './question.resolver';
import { QuestionService } from './question.service';

@Module({
  providers: [QuestionResolver, QuestionService, PrismaService],
})
export class QuestionModule {}