import { IOrder } from "../../domain/entities/order.entity";

export interface IOrderRepository {
  findAll(): Promise<Partial<IOrder>[]>;
  findById(orderId: string): Promise<Partial<IOrder>>;
  save(order: IOrder): Promise<{ orderId: string }>;
  findByOrderStatus(orderStatus: number): Promise<Array<IOrder>>
}
