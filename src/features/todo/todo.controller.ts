import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { delay, map, of } from 'rxjs';
import type { Response } from 'express';

@Controller('todos')
export class TodoController {
  public todos: string[] = ['代辦1'];

  @Get()
  getTodos(@Query('skip') skip = '0', @Query('limit') limit = '10') {
    const skipNum = parseInt(skip);
    const limitNum = parseInt(limit);
    return this.todos.slice(skipNum, skipNum + limitNum);
  }

  @Get('rxjs')
  testRxjs() {
    return of([7777]).pipe(
      delay(2000), // 延遲 2 秒
      map((val) => val), // 這裡 map 可以省略
    );
  }

  @Get('async')
  getPromiseTodo() {
    console.log('enter!');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['123']);
      }, 2000);
    });
  }

  @Get('hybridfail')
  testHybridFail(@Res() response: Response) {
    return ['ffff'];
  }

  @Get('hybrid')
  testHybrid(@Res({ passthrough: true }) response: Response) {
    return ['fsdfds'];
  }

  @Get('libraryMode')
  testLibraryMode(@Res() response: Response) {
    response.status(200).json({ message: 'Hello' });
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    const _id = Number(id);
    return this.todos[_id];
    // return this.todos[index];
  }

  @Post('bul*k')
  bullkkk() {
    return [123];
  }

  @Post()
  createTodo(@Body() data: { todo: string }) {
    this.todos.push(data.todo);
    return {
      todo: data.todo,
    };
  }
}
