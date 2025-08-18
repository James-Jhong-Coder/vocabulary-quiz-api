import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get()
  getTodos() {
    return [];
  }

  @Get(':id')
  getTodo() {}

  @Post()
  createTodo(@Body() data: any) {
    return data;
  }
}
