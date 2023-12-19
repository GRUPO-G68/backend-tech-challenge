import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderRepositoryAdapter } from './order.repository';
import { IOrder, Order } from '../../domain/entities/order.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './order.dtos';
import { OrderItem } from '../../domain/entities/order-item.entity';
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
    const { clientDocument, items: orderItems } = orderInput;
    const order: Order = new Order(clientDocument);
    // @ts-ignore
    for (const orderItemDto of orderItems) {
      const { productId, quantity } = orderItemDto;
      const orderItemEntity = new OrderItem(productId, quantity);
      order.addItem(orderItemEntity);
    }
    return this.orderRepositoryAdapter.save(order);
  }

  @Get()
  async getAllOrders(): Promise<Partial<IOrder>[]> {
    return this.orderRepositoryAdapter.findAll();
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
