import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

export interface IProductCategory {
  id: string;
  name: string;
  description: string;
}

@Entity()
export class ProductCategory implements IProductCategory {
  @PrimaryGeneratedColumn('increment')
  id: string;
  @Column({ type: 'text', nullable: false })
  name: string;
  @Column({ type: 'text', nullable: true })
  description: string;
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
