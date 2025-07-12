import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  activeUsers() {
    return this.userService.activeUsers();
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Put()
  updateUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }
}
