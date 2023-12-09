import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { ClienteController } from "./adapters/cliente/cliente.controller";

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [AppService],
})
export class AppModule {}
