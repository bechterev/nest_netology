import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import * as request from 'supertest';
import { BookModule } from './book.module';
import { BookService } from '../book-service/book-service.service';
import { INestApplication } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

describe('BookController', () => {
  let controller: BookController;
  let app: INestApplication;
  let bookService = { getBooks: () => ['test'] };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
    })
      .overrideProvider(BookService)
      .useValue(bookService)
      .compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET books`, () => {
    return request(app.getHttpServer())
      .get('/book')
      .expect(200)
      .expect({ data: bookService.getBooks() });
  });
});
