import { Injectable } from '@nestjs/common';
import { IOrderRepository } from '../../application/ports/order-repository.port';
import { IOrder, Order } from '../../domain/entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { OrderStatus } from 'src/domain/valueObjects/status-to-situation';

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

  private applySituationToOrder(order: Partial<IOrder>): void {
    const situation = OrderStatus[order.status];
    if (situation) {
      order['situation'] = situation;
    }
  }

  async findAll(): Promise<Partial<IOrder>[]> {
    const orders = await this.orderRepository.find({ order: { status: 'DESC', created_at: 'ASC' }, where: { status: Not(4) } });
    orders.forEach((order) => this.applySituationToOrder(order));
    return orders;
  }

  async findById(orderId: string): Promise<IOrder> {
    const order = await this.orderRepository.findOne({ where: { id: orderId } });
    if (order) {
      this.applySituationToOrder(order);
    }
    return order;
  }

  async findByOrderStatus(orderStatus: number): Promise<Array<IOrder>> {
    const orders = await this.orderRepository.find({ where: { status: orderStatus } });
    return orders;
  }
}
