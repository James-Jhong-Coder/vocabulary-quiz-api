import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    const obj = {
      code: HttpStatus.BAD_REQUEST,
      msg: '錯誤拉',
    };
    throw new HttpException(obj, HttpStatus.BAD_REQUEST);
  }

  @Get('/test-bad-request-class')
  getBadRequestClass() {
    const obj = {
      code: HttpStatus.BAD_REQUEST,
      message: '錯誤拉',
      xxx: 'xxx',
    };
    throw new BadRequestException(obj);
  }

  @Get('/test-bad-request-class1')
  getBadRequestClass1() {
    throw new HttpException('錯誤!!', HttpStatus.BAD_REQUEST);
  }
}
