import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log(AppController.name, Math.random());
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
