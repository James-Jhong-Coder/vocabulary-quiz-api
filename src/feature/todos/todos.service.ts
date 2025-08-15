import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  private todos: string[] = [];

  public addTodo(todo: string) {
    this.todos.push(todo);
  }

  public getTodos() {
    return this.todos;
  }
}
