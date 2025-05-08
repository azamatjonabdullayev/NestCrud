import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { ViewsModule } from './views/views.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [PostsModule, UserModule, CommentsModule, ViewsModule, LikesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
