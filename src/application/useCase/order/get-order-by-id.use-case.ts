import { OrderRepositoryAdapter } from "src/adapters/order/order.repository";

export class GetOrderByIdUseCase {
    constructor(private orderRepositoryAdapter: OrderRepositoryAdapter) {}

    execute(orderId:string){
        return this.orderRepositoryAdapter.findById(orderId)
    }
}