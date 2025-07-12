import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { v4 as uuidV4 } from 'uuid'; // Ensure you have uuid installed
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  async activeUsers() {
    return await this.userRepository.find();
  }
  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    newUser.id = uuidV4();
    newUser.email = createUserDto.email.toLowerCase();
    newUser.name = createUserDto.name.toLowerCase();
    await this.userRepository.save(newUser);
    //const result = await this.userRepository.save(user);
    return { message: 'Saved User', newUser };
  }

  async updateUser(updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id: updateUserDto.id });
    if (!user) {
      return { message: 'User not found' };
    }
    user.name = updateUserDto.name.toLowerCase();
    user.email = updateUserDto.email.toLowerCase();
    await this.userRepository.save(user);
    return { message: 'Updated User', user };
  }
}
