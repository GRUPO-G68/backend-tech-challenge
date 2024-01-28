import { OrderRepositoryAdapter } from 'src/adapters/order/order.repository';

export class GetOrderByStatusUseCase {
  constructor(private orderRepositoryAdapter: OrderRepositoryAdapter) {}


  execute(statusId: number) {
    return this.orderRepositoryAdapter.findByOrderStatus(statusId)
  }
}
