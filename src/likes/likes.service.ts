import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) {}

  async likePost(data: any) {
    const exists = await this.prisma.like.findUnique({
      where: {
        post_id_user_id: {
          post_id: data.post_id,
          user_id: data.user_id,
        },
      },
    });

    if (exists) {
      return { message: 'Already liked' };
    }

    return await this.prisma.like.create({
      data: {
        post_id: data.post_id,
        user_id: data.user_id,
      },
    });
  }

  async unlikePost(data: any) {
    return await this.prisma.like.delete({
      where: {
        post_id_user_id: {
          post_id: data.post_id,
          user_id: data.user_id,
        },
      },
    });
  }

  async getAllLikes() {
    return await this.prisma.like.findMany();
  }

  async getLikesByPost(postId: string) {
    return await this.prisma.like.findMany({
      where: { post_id: postId },
    });
  }

  async countLikes(postId: string) {
    return await this.prisma.like.count({
      where: { post_id: postId },
    });
  }
}
