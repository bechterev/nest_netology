import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from '../book-service/book-service.service';
import { Book, BookSchema } from '../book-service/Ibook';
import { BookController } from './book.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ExeptionsInterceptor } from 'src/interceptors/exeptions.interceptor';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    UserModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    })
  ],
  controllers: [BookController],
  providers: [
    BookService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ExeptionsInterceptor,
    },
  ],
  exports: [BookService],
})
export class BookModule {}
