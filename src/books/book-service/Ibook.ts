import { v4 as uuidv4 } from 'uuid';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export interface Ibook {
  title: string;
  description: string;
  authors: string[];
  favorite: string;
  fileCover: string;
  fileName: string;
  id?: string;
}

export type BookDocument = Book & Document;
@Schema()
export class Book implements Ibook {
  @Prop({ required: true })
  title: string;
  @Prop()
  description: string;
  @Prop()
  authors: string[];
  @Prop()
  favorite: string;
  @Prop()
  fileCover: string;
  @Prop()
  fileName: string;
  @Prop()
  id?: string;
  constructor(
    title: string,
    description: string = '',
    authors: string[] = [],
    favorite: string = '',
    fileCover: string = '',
    fileName: string = '',
  ) {
    this.authors = authors;
    this.description = description;
    this.favorite = favorite;
    this.fileCover = fileCover;
    this.fileName = fileName;
    this.title = title;
    this.id = uuidv4();
  }
}
export const BookSchema = SchemaFactory.createForClass(Book);
