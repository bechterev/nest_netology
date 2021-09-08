import { Module } from '@nestjs/common';
import { BookService } from '../book-service/book-service.service';
import { BookController } from './book.controller';

@Module({
    controllers:[BookController],
    providers:[BookService],
    exports:[BookService]
})
export class BookModule {
}
