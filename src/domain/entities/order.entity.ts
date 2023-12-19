import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { OrderItem } from './order-item.entity';

// @todo criar OrderItem para fazer o vinculo da quantidade de produtos no pedido
// @todo vincular usuario no pedido
export interface IOrder {
  id: string;
  documentClient: string;
  status: string;
  products: string;
  changeStatus(status: string): void;
  addItem(item: OrderItem): void;
}

@Entity()
export class Order implements Partial<IOrder> {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', nullable: false })
  clientDocument: string;
  @OneToMany(() => OrderItem, (orderItem: OrderItem) => orderItem.order, { eager: true, cascade: true })
  items: OrderItem[];
  @Column()
  status: string;

  constructor(clientDocument: string) {
    this.clientDocument = clientDocument;
    this.status = null;
  }

  addItem(item: OrderItem): void {
    this.items.push(item);
  }
}
