import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Sample Product',
  })
  @IsString()
  name: string;
}
