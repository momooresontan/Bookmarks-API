import { IsEmail, IsNotEmpty } from 'class-validator';

/* eslint-disable prettier/prettier */
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  password: string;
}
