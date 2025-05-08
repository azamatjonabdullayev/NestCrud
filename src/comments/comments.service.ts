import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async createComment(data: any) {
    return await this.prisma.comments.create({
      data: {
        user_id: data.user_id,
        post_id: data.post_id,
        comment: data.comment,
      },
    });
  }

  async getAllComments() {
    return await this.prisma.comments.findMany();
  }

  async getCommentById(id: string) {
    return await this.prisma.comments.findUnique({
      where: { id },
    });
  }

  async updateComment(id: string, data: any) {
    return await this.prisma.comments.update({
      where: { id },
      data: {
        comment: data.comment,
      },
    });
  }

  async deleteComment(id: string) {
    return await this.prisma.comments.delete({
      where: { id },
    });
  }

  async getCommentsByPost(postId: string) {
    return await this.prisma.comments.findMany({
      where: { post_id: postId },
    });
  }
}
