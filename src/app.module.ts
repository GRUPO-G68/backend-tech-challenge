import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { ClienteController } from "./adapters/cliente/cliente.controller";
import { PedidoController } from "./adapters/pedido/pedido.controller";
import { ProdutoController } from "./adapters/produto/produto.controller";

@Module({
  imports: [],
  controllers: [ClienteController, PedidoController, ProdutoController],
  providers: [AppService],
})
export class AppModule {}
