import { ApiProperty } from '@nestjs/swagger';

export class OrderItemDto {
  @ApiProperty()
  productId: string;
  @ApiProperty()
  quantity: number;
}

export class CreateOrderDto {
  @ApiProperty()
  clientDocument: string;
  @ApiProperty({ type: [OrderItemDto] })
  products: Array<OrderItemDto>;
}

export class PaymentFeedbackDto {
  @ApiProperty()
  orderId: string;
  @ApiProperty()
  paymentStatus: number;
}

export class WebhookDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  topic: string
}
