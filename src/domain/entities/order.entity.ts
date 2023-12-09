import { Column, Entity, PrimaryColumn } from "typeorm";

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
