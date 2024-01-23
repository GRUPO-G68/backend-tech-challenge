import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { OrderItem, IOrderItem } from './order-item.entity';

// @todo criar OrderItem para fazer o vinculo da quantidade de produtos no pedido
// @todo vincular usuario no pedido
export interface IOrder {
  id: string;
  documentClient: string;
  status: number;
  products: Array<IOrderItem>;
  changeStatus(status: number): void;
  addItem(itemList: Array<OrderItem>): void;
  created_at: Date;
  updated_at: Date;
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
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at: Date;

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

  changeStatus(status: number): void {
    this.status = status
  }
}
