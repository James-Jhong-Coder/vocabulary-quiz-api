import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './decorators/roles/roles.decorator';
import { RoleGuard } from './guards/role/role.guard';
import { User } from './decorators/user/user.decorator';
import { Authorization } from './decorators/authorization/authorization.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(RoleGuard)
  // @Roles('admin', 'staff')
  @Authorization('admin')
  @Get()
  getHello(@User('xxx') xxx: string): string {
    return xxx;
  }
}
