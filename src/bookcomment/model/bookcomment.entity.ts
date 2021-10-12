import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';


export type BookCommentDocument = BookcommentEntity & Document;

@Schema()
export class BookcommentEntity {
    @Prop()
    id: number;
    @Prop()
    bookId: number;
    @Prop()
    comment: string;
}
export const BookCommentSchema = SchemaFactory.createForClass(BookcommentEntity);