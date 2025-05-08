import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private service: UserService) {}

  @Post('new')
  async addUser(@Body() body): Promise<any> {
    return await this.service.createUser(body);
  }

  @Get('all')
  async getUsers() {
    return await this.service.getAllUsers();
  }

  @Get(':id')
  async getById(@Param('id') id: any): Promise<any> {
    return await this.service.getUserById(id);
  }

  @Post(':id/update')
  async updateUser(@Param('id') id: any, @Body() body: any): Promise<any> {
    return await this.service.updateUser(id, body);
  }

  @Delete(':id/delete')
  async deleteUser(@Param('id') id: any) {
    return await this.service.deleteUser(id);
  }
}
