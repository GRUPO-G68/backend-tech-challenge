import { Injectable } from "@nestjs/common";
import { IOrderRepository } from "../../application/ports/order-repository.port";
import { IOrder, Order } from "../../domain/entities/order.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "../../domain/entities/client.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrderRepositoryAdapter implements IOrderRepository {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async save(order: Partial<IOrder>): Promise<{ orderId }> {
    const orderCreated = await this.orderRepository.save(order);
    return { orderId: orderCreated.id };
  }
  async changeOrderStatus(orderId: string, status: string): Promise<boolean> {
    return true;
  }

  async findAll(): Promise<Partial<IOrder>[]> {
    return this.orderRepository.find();
  }

  async findById(orderId: string): Promise<Partial<IOrder>> {
    return this.orderRepository.findOne({ where: { id: orderId } });
  }
}
