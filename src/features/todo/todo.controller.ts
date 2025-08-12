import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

interface ITodo {
  id: string;
  title: string;
}

@Controller('todo')
export class TodoController {
  public todos: ITodo[] = [];

  @Get()
  getTodos(
    @Query('skip') skip: string = '0',
    @Query('limit') limit: string = '10',
  ) {
    const _skip = parseInt(skip, 10);
    const _limit = parseInt(limit, 10);
    return this.todos.slice(_skip, _limit + _skip);
  }
  @Get('fu*ck')
  testWildCard() {
    return { msg: 'Matched!' };
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    console.log('id = ', id, this.todos);
    return this.todos.find((todo) => todo.id == id);
  }

  @Post()
  createTodo(@Body() data: { id: string; title: string }) {
    console.log('todos = ', this.todos);
    this.todos.push(data);
    return data;
  }
}
