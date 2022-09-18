import { Test, TestingModule } from '@nestjs/testing';
import { TribusServiceService } from './tribus.service';

describe('TribusServiceService', () => {
  let service: TribusServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TribusServiceService],
    }).compile();

    service = module.get<TribusServiceService>(TribusServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
