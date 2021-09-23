import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from '../model/iuser.interface';
import { Model } from 'mongoose';
import { CreateBookDto } from 'src/books/book-service/create-book.dto';
import { User } from '../model/user';
import { CreateUserDto, UpdateUserDto } from '../model/createuserdto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<IUser>,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<IUser> {
    const newUser = await new this.userModel(createUserDto);
    return newUser.save();
  }

  public async find(userId: string): Promise<IUser> {
    const user = await this.userModel.findById(userId);
    return user;
  }

  public async findByEmail(userEmail: string): Promise<IUser> {
    const user = await this.userModel.findOne({ email: userEmail });
    if (!user) throw Error('not found user');
    return user;
  }

  public async findAll(): Promise<IUser[]> {
    const listUser = await this.userModel.find();
    return listUser;
  }

  public async update(
    userId: string,
    updateDate: UpdateUserDto,
  ): Promise<IUser> {
    const changeUser = await this.userModel.findByIdAndUpdate(
      { _id: userId },
      updateDate,
    );
    if (!changeUser) throw new Error(`User with id : ${userId} not found`);
    return changeUser;
  }

  public async remove(userId: string): Promise<any> {
    const deleteUser = await this.userModel.findByIdAndDelete(userId);
    if (!deleteUser) throw new Error(`User with id : ${userId} not found`);
    return deleteUser;
  }
}
