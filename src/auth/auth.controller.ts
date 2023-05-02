/* eslint-disable prettier/prettier */
import { Controller, Post, Body, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(
    @Body('email') email: string,
    @Body('password', ParseIntPipe) password: string,
  ) {
    console.log({
      email,
      typeOfEmail: typeof email,
      password,
      typeOfPassword: typeof password,
    });
    return this.authService.signup();
  }

  @Post('login')
  login() {
    return this.authService.login();
  }
}
