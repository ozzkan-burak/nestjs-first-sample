import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

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

  @ApiProperty({
    example: '1990-05-12',
  })
  @IsDateString()
  birthday: Date;
}
