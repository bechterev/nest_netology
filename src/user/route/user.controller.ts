import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { response } from 'express';
import { catchError, Observable } from 'rxjs';
import { CreateUserDto, UpdateUserDto } from '../model/createuserdto';
import { IUser } from '../model/iuser.interface';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  public async getUser(@Res() response, @Param('id') userId: string) {
    const user = await this.userService.find(userId);
    if (!user) throw new Error('User not found');
    return response.status(HttpStatus.OK).json(user);
  }

  @Get()
  public async getAll(@Res() response): Promise<IUser[]> {
    try {
      const list = await this.userService.findAll();
      return list;
    } catch (err) {
      throw new Error('List of users empty');
    }
  }

  @Post()
  public async createUser(
    @Res() response,
    @Body() createUser: CreateUserDto,
  ): Promise<IUser> {
    try {
      const newuser = await this.userService.create(createUser);
      return newuser;
    } catch (err) {
      throw new Error('User not created');
    }
  }

  @Put('/:id')
  public async updateUser(
    @Res() response,
    @Param('id') userId: string,
    @Body() updateData: UpdateUserDto,
  ): Promise<IUser> {
    try {
      const updateUser = await this.userService.update(userId, updateData);
      return updateUser;
    } catch (err) {
      throw Error(err);
    }
  }

  @Delete('/:id')
  public async deleteUser(
    @Res() response,
    @Param('id') userId: string,
  ): Promise<string> {
    try {
      await this.userService.remove(userId);
      return userId;
    } catch (err) {
      throw Error(err);
    }
  }
}
