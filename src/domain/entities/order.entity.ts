import { Column, Entity, PrimaryColumn } from "typeorm";

// @todo criar OrderItem para fazer o vinculo da quantidade de produtos no pedido
// @todo vincular usuario no pedido
export interface IOrder {
  id: string;
  documentClient: string;
  status: string;
  products: string;
  changeStatus(status: string): void;
}

@Entity()
export class Order implements Partial<IOrder> {
  @PrimaryColumn()
  id: string;
  @Column({ type: "text", nullable: false })
  documentClient: string;
  @Column()
  products: string;
  @Column()
  status: string;
}
