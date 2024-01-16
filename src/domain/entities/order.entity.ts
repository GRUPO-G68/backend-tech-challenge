import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderItem, IOrderItem } from './order-item.entity';

// @todo criar OrderItem para fazer o vinculo da quantidade de produtos no pedido
// @todo vincular usuario no pedido
export interface IOrder {
  id: string;
  documentClient: string;
  status: string;
  products: Array<IOrderItem>;
  changeStatus(status: string): void;
  addItem(itemList: Array<OrderItem>): void;
}


@Entity()
export class Order implements IOrder {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', nullable: false })
  documentClient: string;
  @OneToMany(() => OrderItem, (orderItem: OrderItem) => orderItem.order, { eager: true, cascade: true })
  products: OrderItem[];
  @Column()
  status: string;

  constructor(documentClient: string) {
    this.documentClient = documentClient;
    this.status = null;
  }

  addItem(itemList: Array<OrderItem>): void {
    this.products.push(...itemList);
  }
  
  changeStatus(status: string): void {
    console.log('status', status)
      throw 'not implemented'
  }
}
