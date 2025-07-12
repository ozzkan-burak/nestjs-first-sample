import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Id',
  })
  id: string;
}
