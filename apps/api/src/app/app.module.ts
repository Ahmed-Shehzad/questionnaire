import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
import { AnswerModule } from '../modules/answer/answer.module';
import { PageModule } from '../modules/page/page.module';
import { QuestionModule } from '../modules/question/question.module';
import { QuestionnaireModule } from '../modules/questionnaire/questionnaire.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const prisma = new PrismaClient({
  log: ['query'],
});

@Module({
  imports: [
    PageModule,
    QuestionModule,
    QuestionnaireModule,
    AnswerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: '../graphql/schema/schema.graphql',
      context: ({ req }) => ({ req, prisma }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
