import { Injectable } from "@nestjs/common";
import { statusToSituation } from '../../domain/valueObjects/status-to-situation';
import { IOrderRepository } from "../../application/ports/order-repository.port";
import { IOrder, Order } from "../../domain/entities/order.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

// @todo implementar os metodos
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
  private applySituationToOrder(order: Partial<IOrder>): void {
    const situation = statusToSituation[order.status];
    if (situation) {
      order['situation'] = situation;
    }
  }
  async findAll(): Promise<Partial<IOrder>[]> {
    const orders = await this.orderRepository.find();
    orders.forEach(order => this.applySituationToOrder(order));
    return orders;
  }

  async findById(orderId: string): Promise<Partial<IOrder>> {
    const order = await this.orderRepository.findOne({ where: { id: orderId } });
    if (order) {
      this.applySituationToOrder(order);
    }
    return order;
  }

  async findByOrderStatus(orderStatus: string): Promise<Partial<IOrder>[]> {
    const orders = await this.orderRepository.find({ where: { status: orderStatus } });
    orders.forEach(order => this.applySituationToOrder(order));
    return orders;
  }
}
