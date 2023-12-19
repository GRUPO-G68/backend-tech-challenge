import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IOrder } from './order.entity';

export interface IOrderItem {
  product: string;
  quantity: number;
}
@Entity()
export class OrderItem implements Partial<IOrderItem> {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', nullable: false })
  product: string;
  @Column()
  quantity: number;

  constructor(product: string, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}
