import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  getBookmarks(userId: number) {}

  getBookmarkById(userId: number, bookmarkId: number) {}

  createBookmark(userId: number, dto: CreateBookmarkDto) {}

  updateBookmark(userId: number, bookmarkId: number, dto: EditBookmarkDto) {}

  deleteBookmarks(userId: number, bookmarkId: number) {}
}
