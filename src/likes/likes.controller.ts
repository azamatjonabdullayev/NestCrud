import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post('add')
  async likePost(@Body() body: any) {
    return this.likesService.likePost(body);
  }

  @Post('remove')
  async unlikePost(@Body() body: any) {
    return this.likesService.unlikePost(body);
  }

  @Get('all')
  async getAllLikes() {
    return this.likesService.getAllLikes();
  }

  @Get('post/:postId')
  async getLikesByPost(@Param('postId') postId: string) {
    return this.likesService.getLikesByPost(postId);
  }

  @Get('count/:postId')
  async countLikes(@Param('postId') postId: string) {
    return this.likesService.countLikes(postId);
  }
}
