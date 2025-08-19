import { Controller, Get, Scope } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  path: 'test',
  scope: Scope.REQUEST, // 每次請求會新建一次
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    console.log('[AppController] Handling request...');
    return this.appService.getHello();
  }
}
