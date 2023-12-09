import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { ClientController } from "./adapters/cliente/client.controller";
import { PedidoController } from "./adapters/pedido/pedido.controller";
import { ProdutoController } from "./adapters/produto/produto.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientRepositoryAdapter } from "./adapters/cliente/client.repository";
import { Client } from "./domain/entities/cliente.entity";

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
    TypeOrmModule.forFeature([Client]),
  ],
  controllers: [ClientController, PedidoController, ProdutoController],
  providers: [ClientRepositoryAdapter],
})
export class AppModule {}

// docker run -e MYSQL_ROOT_PASSWORD=tech@123 -p 3306:3306 --name techchallenge -d mariadb
