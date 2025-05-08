import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('new')
  async createComment(@Body() body: any) {
    return this.commentsService.createComment(body);
  }

  @Get('all')
  async getAllComments() {
    return this.commentsService.getAllComments();
  }

  @Get(':id')
  async getCommentById(@Param('id') id: string) {
    return this.commentsService.getCommentById(id);
  }

  @Put(':id')
  async updateComment(@Param('id') id: string, @Body() body: any) {
    return this.commentsService.updateComment(id, body);
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: string) {
    return this.commentsService.deleteComment(id);
  }

  @Get('post/:postId')
  async getCommentsByPost(@Param('postId') postId: string) {
    return this.commentsService.getCommentsByPost(postId);
  }
}
