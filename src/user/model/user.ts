import { v4 as uuidv4 } from 'uuid';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  id: string;

  @Prop({ required: true })
  login: string;

  @Prop({ required: true })
  password: string;

  @Prop({ unique: true, required: true })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
