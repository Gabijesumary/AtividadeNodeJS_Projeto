/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsEmail,
  MaxLength,
  MinLength,
} from 'class-validator';

export class createRegisterDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  password: string;
  @IsNotEmpty()
  @IsString()
  site: string;
  @IsPhoneNumber()
  phone?: string;
}