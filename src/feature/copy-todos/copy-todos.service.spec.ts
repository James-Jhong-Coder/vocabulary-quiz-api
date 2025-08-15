import { Test, TestingModule } from '@nestjs/testing';
import { CopyTodosService } from './copy-todos.service';

describe('CopyTodosService', () => {
  let service: CopyTodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CopyTodosService],
    }).compile();

    service = module.get<CopyTodosService>(CopyTodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
