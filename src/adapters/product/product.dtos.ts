import { ApiProperty } from '@nestjs/swagger';
import { ProductStatus } from '../../domain/entities/product.entity';

export class CreateProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  category: number;
  @ApiProperty()
  description: string;
}

export class UpdateProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  category: number;
  @ApiProperty()
  status: ProductStatus;
  @ApiProperty()
  description: string;
}
