import { Module } from '@nestjs/common';
import { ClientController } from './adapters/client/client.controller';
import { OrderController } from './adapters/order/order.controller';
import { ProductController } from './adapters/product/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRepositoryAdapter } from './adapters/client/client.repository';
import { Client } from './domain/entities/client.entity';
import { Order } from './domain/entities/order.entity';
import { OrderRepositoryAdapter } from './adapters/order/order.repository';
import { Product } from './domain/entities/product.entity';
import { ProductRepositoryAdapter } from './adapters/product/product.repository';
import { OrderItem } from './domain/entities/order-item.entity';
// @todo trocar os dados do banco fixos por variaveis de ambiente
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'svc-mysql-fiap',
      port: 3306,
      username: 'root',
      password: 'tech@123',
      database: 'tech_challenge',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Client, Order, OrderItem, Product]),
  ],
  controllers: [ClientController, OrderController, ProductController],
  providers: [ClientRepositoryAdapter, OrderRepositoryAdapter, ProductRepositoryAdapter],
})
export class AppModule {}

// docker run -e MYSQL_ROOT_PASSWORD=tech@123 -p 3306:3306 --name tech_challenge -d mariadb
