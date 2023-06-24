import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('/graphql')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
