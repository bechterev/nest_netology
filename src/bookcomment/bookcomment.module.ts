import { Module } from '@nestjs/common';
import { BookcommentsService } from './bookcomments/bookcomments.service';
import { BookcommentGateway } from './bookcomment.gateway';
import { BookcommentEntity, BookCommentSchema } from './model/bookcomment.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:BookcommentEntity.name, schema: BookCommentSchema}])],
  providers: [BookcommentsService, BookcommentGateway]
})
export class BookcommentModule {}
