import { OrderRepositoryAdapter } from 'src/adapters/order/order.repository';
import {  Order } from 'src/domain/entities/order.entity';

export class CreateOrderUseCase {
  criarPedido(repo: OrderRepositoryAdapter, order: Order) {
    return repo.save(order);
  }
}
