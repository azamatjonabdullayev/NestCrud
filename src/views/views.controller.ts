import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ViewsService } from './views.service';

@Controller('views')
export class ViewsController {
  constructor(private readonly viewsService: ViewsService) {}

  @Post('add')
  async addView(@Body() body: any) {
    return this.viewsService.addView(body);
  }

  @Get('all')
  async getAllViews() {
    return this.viewsService.getAllViews();
  }

  @Get('post/:postId')
  async getViewsByPost(@Param('postId') postId: string) {
    return this.viewsService.getViewsByPost(postId);
  }

  @Get('count/:postId')
  async countViews(@Param('postId') postId: string) {
    return this.viewsService.countViews(postId);
  }
}
