import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}
  async createProduct(createProductDto: CreateProductDto) {
    const product = new Product();
    product.name = createProductDto.name;
    const result = await this.productRepository.save(product);
    return result;
  }
}
