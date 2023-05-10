/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '.././auth/guard';
import { GetUser } from '.././auth/decorator';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

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
  createBookmark(@GetUser('id') userId: number, @Body() dto: EditBookmarkDto) {}

  @Patch()
  updateBookmark(
    @GetUser('id') userId: number,
    @Param('id') bookmarkId: number,
    @Body() dto: CreateBookmarkDto,
  ) {}

  @Delete(':id')
  deleteBookmarks(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {}
}
