import { ResolversModule } from '@foxbase/resolvers';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const prisma = new PrismaClient({
  log: ['query'],
});

@Module({
  imports: [
    ResolversModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // autoSchemaFile: 'libs/resolvers/src/lib/schema/schema.graphql',
      autoSchemaFile: true,
      context: ({ req }) => ({ req, prisma }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
