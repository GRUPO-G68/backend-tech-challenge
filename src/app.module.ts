import { Module } from "@nestjs/common";
import { ClientController } from "./adapters/cliente/client.controller";
import { OrderController } from "./adapters/pedido/order.controller";
import { ProductController } from "./adapters/produto/product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientRepositoryAdapter } from "./adapters/cliente/client.repository";
import { Client } from "./domain/entities/client.entity";
import { Order } from "./domain/entities/order.entity";
import { OrderRepositoryAdapter } from "./adapters/pedido/order.repository";
import { Product } from "./domain/entities/product.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mariadb",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "tech@123",
      database: "tech_challenge",
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Client, Order, Product]),
  ],
  controllers: [ClientController, OrderController, ProductController],
  providers: [ClientRepositoryAdapter, OrderRepositoryAdapter],
})
export class AppModule {}

// docker run -e MYSQL_ROOT_PASSWORD=tech@123 -p 3306:3306 --name techchallenge -d mariadb
