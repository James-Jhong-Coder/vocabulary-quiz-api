import { Body, Controller, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { StorageService } from 'src/modules/storage/storage.service';

@Controller('todos')
export class TodosController {
  constructor(
    private readonly todoService: TodosService,
    private readonly storageService: StorageService,
  ) {}

  @Post()
  addTodo(@Body() data: string) {
    this.todoService.addTodo(data);
    this.storageService.addData(data);
    return this.storageService.getData();
  }
}
