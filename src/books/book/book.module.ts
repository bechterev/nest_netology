import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from '../book-service/book-service.service';
import { Book, BookSchema } from '../book-service/Ibook';
import { BookController } from './book.controller';

@Module({
    imports:[MongooseModule.forFeature([{name:Book.name, schema:BookSchema}])],
    controllers:[BookController],
    providers:[BookService],
    exports:[BookService]
})
export class BookModule {
}
