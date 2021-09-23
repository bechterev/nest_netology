import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly login: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
