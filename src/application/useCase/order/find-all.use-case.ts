import { OrderRepositoryAdapter } from "src/adapters/order/order.repository";

export class FindAllOrdersUseCase {
    constructor(private orderRepositoryAdapter: OrderRepositoryAdapter) {}

    execute() {
        return this.orderRepositoryAdapter.findAll()
    }
}