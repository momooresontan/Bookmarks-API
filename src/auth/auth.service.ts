/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  signup() {
    return { msg: 'I have signed up' };
  }

  login() {
    return 'I am logged in';
  }
}
