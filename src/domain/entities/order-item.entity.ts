import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IOrder, Order } from './order.entity';

export interface IOrderItem {
  product: string;
  quantity: number;
  order: IOrder;
}
@Entity()
export class OrderItem implements Partial<IOrderItem> {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', nullable: false })
  product: string;
  @Column()
  quantity: number;
  @ManyToOne(() => Order, (order: Order) => order.products)
  @JoinColumn()
  order: IOrder;

  constructor(product: string, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}
