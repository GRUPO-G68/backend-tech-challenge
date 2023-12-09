import { Injectable } from "@nestjs/common";

interface ChangeOrderStatusDTO {
  orderId: string;
  status: string;
}
@Injectable()
export class ChangeStatusService {
  async execute(dto: ChangeOrderStatusDTO): Promise<string> {
    return null;
  }
}
