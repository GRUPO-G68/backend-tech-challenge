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
import { ProductCategoryRepositoryAdapter } from './adapters/product/product-category.repository';
import { ProductCategory } from './domain/entities/product-category.entity';
import { ProductCategoryController } from './adapters/product/product-category.controller';
import { config } from 'dotenv'
// @todo trocar os dados do banco fixos por variaveis de ambiente
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: config().parsed['DB_HOST'],
      port: Number(config().parsed['DB_PORT']),
      username: config().parsed['DB_USER'],
      password: config().parsed['DB_PASSWORD'],
      database: config().parsed['DB_DATABASE'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Client, Order, OrderItem, Product, ProductCategory]),
  ],
  controllers: [ClientController, OrderController, ProductController, ProductCategoryController],
  providers: [ClientRepositoryAdapter, OrderRepositoryAdapter, ProductRepositoryAdapter, ProductCategoryRepositoryAdapter],
})
export class AppModule {}
