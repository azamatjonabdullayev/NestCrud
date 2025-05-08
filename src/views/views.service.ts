import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ViewsService {
  constructor(private prisma: PrismaService) {}

  async addView(data: any) {
    const exists = await this.prisma.view.findUnique({
      where: {
        post_id_user_id: {
          post_id: data.post_id,
          user_id: data.user_id,
        },
      },
    });

    if (exists) {
      return { message: 'View already exists' };
    }

    return await this.prisma.view.create({
      data: {
        post_id: data.post_id,
        user_id: data.user_id,
      },
    });
  }

  async getAllViews() {
    return await this.prisma.view.findMany();
  }

  async getViewsByPost(postId: string) {
    return await this.prisma.view.findMany({
      where: { post_id: postId },
    });
  }

  async countViews(postId: string) {
    return await this.prisma.view.count({
      where: { post_id: postId },
    });
  }
}
