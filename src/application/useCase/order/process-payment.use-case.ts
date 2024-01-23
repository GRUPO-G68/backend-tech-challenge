import { OrderRepositoryAdapter } from 'src/adapters/order/order.repository';

export class ProcessPaymentUseCase {
  async processPayment(repo: OrderRepositoryAdapter, orderId: string, paymentStatus: number) {
    const order = await repo.findById(orderId)
    order.status = paymentStatus
    return repo.save(order)
  }
}
