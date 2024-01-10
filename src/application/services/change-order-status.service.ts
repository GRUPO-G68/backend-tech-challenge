import { Injectable } from "@nestjs/common";

interface ChangeOrderStatusDTO {
  orderId: string;
  status: string;
}

// @todo implementar regra de negocio para mudar o status
@Injectable()
export class ChangeStatusService {
  async execute(dto: ChangeOrderStatusDTO): Promise<string> {
    return null;
  }
}
