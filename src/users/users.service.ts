import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser({
    username,
    email,
    password,
  }): Promise<{ message: string }> {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (user) throw new BadRequestException('User already exists');

    const hashedPassword: string = await bcrypt.hash(password, 12);

    await this.prisma.user.create({
      data: { username, email, password: hashedPassword },
    });

    return { message: 'User registered successfully' };
  }

  async getAllUsers(): Promise<User[]> {
    const user = await this.prisma.user.findMany();
    return user;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) throw new NotFoundException('User Not Found');

    return user;
  }

  async updateUser(id: string, data: User): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User Not Found');

    await this.prisma.user.update({ where: { id }, data });

    return { message: 'User updated successfully' };
  }

  async deleteUser(id: string): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) throw new BadRequestException('User not found');

    await this.prisma.user.delete({ where: { id } });

    return { message: 'User deleted successfully' };
  }
}
