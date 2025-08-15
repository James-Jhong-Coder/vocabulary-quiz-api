import { Controller, Get } from '@nestjs/common';
import { TodosService } from '../todos/todos.service';
import { StorageService } from 'src/modules/storage/storage.service';

@Controller('copy-todos')
export class CopyTodosController {
  constructor(
    private readonly todoService: TodosService,
    private readonly storageService: StorageService,
  ) {}

  @Get()
  getTodos() {
    return this.storageService.getData();
  }
}
