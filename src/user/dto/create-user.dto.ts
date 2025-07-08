import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'John Doe',
  })
  name: string;
  @IsEmail()
  @ApiProperty({
    example: 'john@john.com',
  })
  email: string;
}
