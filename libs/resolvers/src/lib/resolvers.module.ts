import { Module } from '@nestjs/common';
import { AnswerModule } from './modules/answer/answer.module';
import { PageModule } from './modules/page/page.module';
import { QuestionModule } from './modules/question/question.module';
import { QuestionnaireModule } from './modules/questionnaire/questionnaire.module';

@Module({
  imports: [PageModule, QuestionModule, QuestionnaireModule, AnswerModule],
  controllers: [],
  providers: [],
  exports: [PageModule, QuestionModule, QuestionnaireModule, AnswerModule],
})
export class ResolversModule {}
