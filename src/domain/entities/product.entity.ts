import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

// @todo adicionar anotaçoes para o banco de dados
@Entity()
export class Product implements IProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', nullable: false })
  category: string;
  @Column({ type: 'text', nullable: true })
  description: string;
  @Column({ type: 'text', nullable: false })
  name: string;
  @Column({ type: 'integer', nullable: false })
  price: number;
  @Column({ type: 'text', nullable: false })
  status: string;
  @CreateDateColumn({ type: 'datetime', generated: true, nullable: false })
  createdAt: Date;
  @UpdateDateColumn({ type: 'datetime', generated: true, nullable: false })
  updatedAt: Date;
}
