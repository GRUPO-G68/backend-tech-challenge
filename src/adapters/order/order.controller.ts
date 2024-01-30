import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderRepositoryAdapter } from './order.repository';
import { IOrder, Order } from '../../domain/entities/order.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto, PaymentFeedbackDto, WebhookDto } from './order.dtos';
import { OrderItem } from '../../domain/entities/order-item.entity';
import { CreateOrderUseCase } from 'src/application/useCase/order/create-order.use-case';
import { ProcessPaymentUseCase } from 'src/application/useCase/order/process-payment.use-case';
import { WebhookProcessPaymentUseCase } from 'src/application/useCase/order/webhook-process-payment.use-case';
import { GetOrderByStatusUseCase } from 'src/application/useCase/order/get-order-by-status.use-case';
import { GetOrderByIdUseCase } from 'src/application/useCase/order/get-order-by-id.use-case';
import { FindAllOrdersUseCase } from 'src/application/useCase/order/find-all.use-case';
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
    const createdOrder = new CreateOrderUseCase().execute(this.orderRepositoryAdapter, order);
    return createdOrder;
  }

  @Get()
  async getAllOrders(): Promise<Partial<IOrder>[]> {
    return new FindAllOrdersUseCase(this.orderRepositoryAdapter).execute();
  }

  @Get('/status/:orderStatus')
  async getOrderByStatusId(@Param('orderStatus') orderStatus: number): Promise<Partial<IOrder>[]> {
    return new GetOrderByStatusUseCase(this.orderRepositoryAdapter).execute(orderStatus);
  }

  @Get(':orderId')
  async getOrderById(@Param('orderId') orderId: string): Promise<IOrder> {
    return new GetOrderByIdUseCase(this.orderRepositoryAdapter).execute(orderId);
  }

  @Post('/updateOrderStatus')
  async paymentFeedback(@Body() paymentFeedback: PaymentFeedbackDto) {
    const { orderId, paymentStatus } = paymentFeedback;
    return new ProcessPaymentUseCase().execute(this.orderRepositoryAdapter, orderId, paymentStatus);
  }

  @Post('/webhook')
  async webhookPagamento(@Body() body: WebhookDto) {
    return new WebhookProcessPaymentUseCase().execute(this.orderRepositoryAdapter, body.id, body.topic);
  }
}
