import { Test, TestingModule } from '@nestjs/testing';
import { CopyTodosController } from './copy-todos.controller';

describe('CopyTodosController', () => {
  let controller: CopyTodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CopyTodosController],
    }).compile();

    controller = module.get<CopyTodosController>(CopyTodosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
