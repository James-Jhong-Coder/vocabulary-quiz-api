import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './feature/todos/todos.module';
import { CopyTodosModule } from './feature/copy-todos/copy-todos.module';
import { StorageModule } from './modules/storage/storage.module';
import { CommonModule } from './module/common/common.module';

@Module({
  imports: [TodosModule, CopyTodosModule, StorageModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
