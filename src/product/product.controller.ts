import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('product')
@ApiTags('product')
export class ProductController {
  @Get()
  @ApiOperation({
    summary: 'Active Products',
  })
  getActiveProducts() {
    // Logic to retrieve active products
    return [];
  }
}
