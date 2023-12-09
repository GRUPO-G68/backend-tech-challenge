import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { ClienteController } from "./adapters/cliente/cliente.controller";
import { PedidoController } from "./adapters/pedido/pedido.controller";

@Module({
  imports: [],
  controllers: [ClienteController, PedidoController],
  providers: [AppService],
})
export class AppModule {}
