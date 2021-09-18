import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [BookModule, 
  ConfigModule.forRoot(),  
  MongooseModule.forRoot(process.env.DB_HOST || `mongodb+srv://${process.env.DB_PASSWORD}:${process.env.DB_NAME}@cluster0.jdgs4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
