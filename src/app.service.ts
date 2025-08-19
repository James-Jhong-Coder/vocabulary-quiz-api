import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class AppService
  implements
    OnModuleInit,
    OnModuleDestroy,
    OnApplicationBootstrap,
    OnApplicationShutdown
{
  getHello(): string {
    return 'Hello World!';
  }

  onModuleInit() {
    console.log('[AppService] onModuleInit');
  }

  onModuleDestroy() {
    console.log('[AppService] onModuleDestroy');
  }

  onApplicationBootstrap() {
    console.log('[AppService] onApplicationBootstrap');
  }

  onApplicationShutdown(signal?: string) {
    console.log('[AppService] onApplicationShutdown', signal);
  }
}
