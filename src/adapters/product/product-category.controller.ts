import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductCategoryRepositoryAdapter } from './product-category.repository';
import { CreateProductCategoryDto } from './dtos/create-product-category.dto';
import { CreateProductCategoryPresenter } from './presenters/create-product-category.presenter';
import { IProductCategory, ProductCategory } from '../../domain/entities/product-category.entity';

@ApiTags('Category')
@Controller('categories')
export class ProductCategoryController {
  constructor(private readonly productCategoryRepository: ProductCategoryRepositoryAdapter) {}

  @Post('')
  async createProductCategory(@Body() inputDto: CreateProductCategoryDto): Promise<CreateProductCategoryPresenter> {
    const { name, description } = inputDto;
    const category: ProductCategory = new ProductCategory(name, description);
    return this.productCategoryRepository.save(category);
  }
  
  @Get()
  findAll(): Promise<IProductCategory[]> {
    return this.productCategoryRepository.findAll();
  }
}
