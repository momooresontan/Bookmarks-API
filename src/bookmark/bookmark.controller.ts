/* eslint-disable prettier/prettier */
import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '.././auth/guard';
import { GetUser } from '.././auth/decorator';
import { BookmarkService } from './bookmark.service';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}
  @Get()
  getBookmarks(@GetUser() userId: number) {}

  @Get()
  getBookmarkById(@GetUser() userId: number) {}

  @Post()
  createBookmark(@GetUser() userId: number) {}

  @Patch()
  updateBookmark(@GetUser() userId: number) {}

  @Delete()
  deleteBookmarks(@GetUser() userId: number) {}
}
