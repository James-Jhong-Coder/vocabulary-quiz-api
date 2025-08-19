import { Controller, Get } from '@nestjs/common';
import { HelloService } from './modules/hello/hello.service';

@Controller()
export class AppController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello() {
    return this.helloService.sayHello();
  }
}
