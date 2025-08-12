import { Injectable } from '@nestjs/common';

@Injectable()
export class MyService {
  sayHello(name: string) {
    return `Hello 123, ${name}`;
  }
}
