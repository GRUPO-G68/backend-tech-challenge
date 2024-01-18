import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderRepositoryAdapter } from './order.repository';
import { IOrder, Order } from '../../domain/entities/order.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './order.dtos';
import { OrderItem } from '../../domain/entities/order-item.entity';
import { CreateOrderUseCase } from 'src/application/useCase/create-order.use-case';
// @todo Tratar excecao na controller
// @todo Melhorar Documentacao
// @todo Adicionar Dtos
// @todo Adicionar Validacao de Entrada
@ApiTags('Orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderRepositoryAdapter: OrderRepositoryAdapter) {}
  @Post()
  async createOrder(@Body() orderInput: CreateOrderDto): Promise<{ orderId: string }> {
    const { clientDocument, products } = orderInput;
    const order: Order = new Order(clientDocument);
    for (const orderItemDto of products) {
      const { productId, quantity } = orderItemDto;
      const orderItemEntity = new OrderItem(productId, quantity);
      order.addItem([orderItemEntity]);
    }
    const createdOrder = new CreateOrderUseCase().criarPedido(this.orderRepositoryAdapter, order);
    return createdOrder
  }

  @Get()
  async getAllOrders(): Promise<Partial<IOrder>[]> {
    return this.orderRepositoryAdapter.findAll();
  }
  @Get('/status/:orderStatus')
  async getorderStatusById(@Param('orderStatus') orderStatus: number): Promise<Partial<IOrder>[]> {
    return this.orderRepositoryAdapter.findByOrderStatus(orderStatus);
  }
  @Get(':orderId')
  async getOrderById(@Param('orderId') orderId: string): Promise<Partial<IOrder>> {
    return this.orderRepositoryAdapter.findById(orderId);
  }

  @Get(':orderId/change-status/:orderStatus')
  async filterOrdersByStatus(@Param('orderId') orderId: string, @Param('orderStatus') orderStatus: string): Promise<{ orderStatusWasChanged: boolean }> {
    await this.orderRepositoryAdapter.changeOrderStatus(orderId, orderStatus);
    return { orderStatusWasChanged: true };
  }
}
