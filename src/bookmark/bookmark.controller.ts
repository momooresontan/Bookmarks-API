/* eslint-disable prettier/prettier */
import {
  Controller,
  Delete,
  Get,
  Param,
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
  getBookmarks(@GetUser('id') userId: number) {}

  @Get(':id')
  getBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {}

  @Post()
  createBookmark(@GetUser('id') userId: number) {}

  @Patch()
  updateBookmark(
    @GetUser('id') userId: number,
    @Param('id') bookmarkId: number,
  ) {}

  @Delete()
  deleteBookmarks(
    @GetUser('id') userId: number,
    @Param('id') bookmarkId: number,
  ) {}
}
