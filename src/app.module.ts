import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { HelloMiddleware } from './middlewares/hello/hello.middleware';
import { TodoController } from './feats/todo/todo.controller';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer
      .apply(HelloMiddleware)
      .exclude({
        path: 'todos',
        method: RequestMethod.POST,
      })
      .forRoutes(TodoController);
  }
}
