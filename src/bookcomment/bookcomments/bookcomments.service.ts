import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {CreateBookcommentDto, UpdateBookCommentDto} from '../model/bookcomment.dto'
import { BookCommentDocument, BookcommentEntity } from '../model/bookcomment.entity';

@Injectable()
export class BookcommentsService {
    constructor(@InjectModel(BookcommentEntity.name) private readonly model: Model<BookCommentDocument>){}
    async create(createBookComment:CreateBookcommentDto):Promise<BookcommentEntity>{
        return await new this.model({
            ...createBookComment
        }).save();
    }
    async update(id:string, updateBookCommentDto:UpdateBookCommentDto):Promise<BookcommentEntity>{
        return await this.model.findByIdAndUpdate(id, {id:Number(updateBookCommentDto.id),...updateBookCommentDto}).exec();
    }
    async findAllBookComment(bookid:string):  Promise<BookcommentEntity>{
        return await this.model.findById(bookid);
    }
    async readAll():Promise<BookcommentEntity[]>{
        return await this.model.find();
    }
    async delete(id:string):Promise<string>{
        await this.model.deleteOne({id:id})
        return id;
    }
}
