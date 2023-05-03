/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2'

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async signup(dto: AuthDto) {
    // Generate the password hash
    const hash = argon .hash(dto.password)
    //Save the new user in the db
    const user = await this.prismaService.user.create({
      data: {

      }
    })

    // Return the saved user
    return { msg: 'I have signed up' };
  }

  login() {
    return 'I am logged in';
  }
}
