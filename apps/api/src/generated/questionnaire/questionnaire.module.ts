import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { QuestionnaireResolver } from './questionnaire.resolver'
import { QuestionnaireService } from './questionnaire.service'

@Module({
  providers: [QuestionnaireResolver, QuestionnaireService, PrismaService]
})
export class QuestionnaireModule { }

