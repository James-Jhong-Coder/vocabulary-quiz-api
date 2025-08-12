import { Controller, Get, Query, Res, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { MyService } from './foo.service';
import { of } from 'rxjs';
import type { Response as ExpressResponse } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly myService: MyService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('greet')
  greet(@Query('name') name = 'World') {
    return this.myService.sayHello(name);
  }

  @Get('async')
  testPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([]);
      }, 2000);
    });
  }

  @Get('rxjs')
  testRxjs() {
    return of([]);
  }

  @Get('library-mode')
  testLibraryMode(@Res() response: ExpressResponse) {
    response.status(200).json({ message: 'Hello' });
  }

  @Get('hybridfail')
  testHybridFail(@Res() response: ExpressResponse) {
    return [];
  }

  @Get('hybrid')
  testHybrid(@Res({ passthrough: true }) response: ExpressResponse) {
    return [];
  }
}
