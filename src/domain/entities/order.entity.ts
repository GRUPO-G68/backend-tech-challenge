import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderItem, IOrderItem } from './order-item.entity';

// @todo criar OrderItem para fazer o vinculo da quantidade de produtos no pedido
// @todo vincular usuario no pedido
export interface IOrder {
  id: string;
  documentClient: string;
  status: number;
  products: Array<IOrderItem>;
  changeStatus(status: string): void;
  addItem(itemList: Array<OrderItem>): void;
}

@Entity()
export class Order implements IOrder {
  @PrimaryGeneratedColumn('increment')
  id: string;
  @Column({ type: 'text', nullable: false })
  documentClient: string;
  @OneToMany(() => OrderItem, (orderItem: OrderItem) => orderItem.order, { eager: true, cascade: true })
  products: OrderItem[];
  @Column()
  status: number;

  constructor(documentClient: string) {
    this.documentClient = documentClient;
    this.status = null;
  }

  addItem(itemList: Array<OrderItem>): void {
    const hasArray = this.products?.length === 0;

    if (!hasArray) {
      this.products = [];
    }

    this.products.push(...itemList);
  }

  changeStatus(status: string): void {
    console.log('status', status);
    throw 'not implemented';
  }
}
