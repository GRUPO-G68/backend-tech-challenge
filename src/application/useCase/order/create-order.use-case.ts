import { OrderRepositoryAdapter } from 'src/adapters/order/order.repository';
import { Order } from 'src/domain/entities/order.entity';
import { OrderStatus } from 'src/domain/valueObjects/status-to-situation';

export class CreateOrderUseCase {
  
  execute(repo: OrderRepositoryAdapter, order: Order) {
    order.status = OrderStatus.PAYMENT_APPROVED;
    return repo.save(order);
  }
}
