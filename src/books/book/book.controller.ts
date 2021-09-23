import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from 'src/auth/service/auth.service';
import { ExeptionsInterceptor } from '../../interceptors/exeptions.interceptor';
import { BookService } from '../book-service/book-service.service';
import { CreateBookDto } from '../book-service/create-book.dto';
import { Book, BookDocument, Ibook } from '../book-service/Ibook';
import { ValidationPipe } from '../book-service/pipes/validation.pipe';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get(':id')
  @UseInterceptors(new ExeptionsInterceptor())
  async getBook(@Param() params): Promise<BookDocument> {
    return <BookDocument>this.bookService.getBook(params.id);
  }
  @Delete(':id')
  @UseGuards(AuthService)
  @UseInterceptors(new ExeptionsInterceptor())
  async deleteBook(@Param() params): Promise<string> {
    let book = this.bookService.deleteBook(params.id);
    if (typeof book !== 'undefined') return Promise.resolve(book);
    else return Promise.reject('not found');
  }

  @Get()
  @UseInterceptors(new ExeptionsInterceptor())
  async getBooks(): Promise<Book[]> {
    let books = this.bookService.getBooks();
    if (typeof books !== 'undefined') return Promise.resolve(books);
    else return Promise.reject('not found');
  }
  @Post()
  @UsePipes(new ValidationPipe())
  async createBook(@Body() newBook: CreateBookDto): Promise<BookDocument> {
    try {
      return Promise.resolve(this.bookService.createBook(newBook));
    } catch (e) {
      console.log(e);
    }
    return Promise.reject('dsad');
  }
  @Put(':id')
  async updateBook(@Param() params, @Body() data: any): Promise<BookDocument> {
    try {
      return this.updateBook(params.id, data);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
