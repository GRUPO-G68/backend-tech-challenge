import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  category: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  price: string;
  @ApiProperty()
  status: string;
}
