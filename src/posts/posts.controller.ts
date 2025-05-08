import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // Create a new post
  @Post('new')
  async createPost(@Body() body: any) {
    return this.postsService.createPost(body);
  }

  // Get all posts
  @Get('all')
  async getAllPosts() {
    return this.postsService.getAllPosts();
  }

  // Get a specific post by id
  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return this.postsService.getPostById(id);
  }

  // Update a post
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() body: any) {
    return this.postsService.updatePost(id, body);
  }

  // Delete a post
  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(id);
  }
}
