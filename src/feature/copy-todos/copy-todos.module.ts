import { Module } from '@nestjs/common';
import { CopyTodosController } from './copy-todos.controller';
import { CopyTodosService } from './copy-todos.service';
import { TodosModule } from '../todos/todos.module';

@Module({
  imports: [TodosModule],
  controllers: [CopyTodosController],
  providers: [CopyTodosService],
})
export class CopyTodosModule {}
