import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface IProductCategory {
  id: string;
  name: string;
  description: string;
}

@Entity()
export class ProductCategory implements IProductCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', nullable: false })
  name: string;
  @Column({ type: 'text', nullable: true })
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
