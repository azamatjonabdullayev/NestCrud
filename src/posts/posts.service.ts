import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async createPost(data: any) {
    return await this.prisma.post.create({
      data: {
        user_id: data.user_id,
        title: data.title || null,
        content: data.content,
      },
    });
  }

  async getAllPosts() {
    return await this.prisma.post.findMany();
  }

  async getPostById(id: string) {
    return await this.prisma.post.findUnique({
      where: { id },
    });
  }

  async updatePost(id: string, data: any) {
    return await this.prisma.post.update({
      where: { id },
      data: {
        title: data.title || null,
        content: data.content,
      },
    });
  }

  async deletePost(id: string) {
    return await this.prisma.post.delete({
      where: { id },
    });
  }
}
