import { Module } from '@nestjs/common';
import { PrismaService } from '../../../../../../apps/api/src/prisma.service';
import { PageResolver } from './page.resolver';
import { PageService } from './page.service';

@Module({
  providers: [PageResolver, PageService, PrismaService],
})
export class PageModule {}
