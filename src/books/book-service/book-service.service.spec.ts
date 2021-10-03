import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book-service.service';
import { Book, BookSchema } from './Ibook';

describe('BookService', () => {
  let service: BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookService, {
        provide: getModelToken(Book.name),
        useValue: BookSchema
      }],
    }).compile();

    service = await module.resolve<BookService>(BookService);
  });
  it('increment length', ()=>{
    const startLen: number = service.getBooks().length;
    service.createBook(new Book('first book'));
    expect(service.getBooks().length
      ).toBe(startLen+1);
  })
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('books length', ()=>{
    expect(service.getBooks().length>=0).toEqual(true);
  });
  it('increment length', ()=>{
    const startLen: number = service.getBooks().length;
    const len:number = service.deleteBook('d').length;
    expect(startLen>=len
      ).toBeTruthy();
  })
});
