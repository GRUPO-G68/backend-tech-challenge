import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ProductCategory } from './product-category.entity';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  status: ProductStatus;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductStatus = 'activated' | 'deactivated';
export enum ProductStatusEnum {
  ACTIVATED = 'activated',
  DEACTIVATED = 'deactivated',
}

// @todo adicionar anotaçoes para o banco de dados
@Entity()
export class Product implements IProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', nullable: false })
  name: string;
  @ManyToOne(() => ProductCategory, (productCategory) => productCategory.products)
  @JoinColumn()
  category: ProductCategory;
  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'integer', nullable: false })
  price: number;
  @Column({ type: 'text', nullable: false, default: ProductStatusEnum.ACTIVATED })
  status: ProductStatus;
  @CreateDateColumn({ type: 'datetime', generated: true, nullable: false })
  createdAt: Date;
  @UpdateDateColumn({ type: 'datetime', generated: true, nullable: false })
  updatedAt: Date;

  constructor(name: string, price: number, category: ProductCategory, status?: ProductStatus, description?: string) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.status = status;
    this.description = description;
  }
}
