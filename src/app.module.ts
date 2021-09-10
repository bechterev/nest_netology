import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/book/book.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [BookModule, 
  MongooseModule.forRoot(process.env.DB_HOST || 'mongodb://mongodb:27017/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
