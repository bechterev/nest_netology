import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from '../book-service/book-service.service';
import { Book, BookSchema } from '../book-service/Ibook';
import { BookController } from './book.controller';
import {APP_INTERCEPTOR} from '@nestjs/core';
import { ExeptionsInterceptor } from 'src/interceptors/exeptions.interceptor';

@Module({
    imports:[MongooseModule.forFeature([{name:Book.name, schema:BookSchema}])],
    controllers:[BookController],
    providers:[BookService,{
        provide: APP_INTERCEPTOR,
        useClass: ExeptionsInterceptor
    }],
    exports:[BookService]
})
export class BookModule {
}
