import { Test, TestingModule } from '@nestjs/testing';
import { BookcommentGateway } from './bookcomment.gateway';

describe('BookcommentGateway', () => {
  let gateway: BookcommentGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookcommentGateway],
    }).compile();

    gateway = module.get<BookcommentGateway>(BookcommentGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
