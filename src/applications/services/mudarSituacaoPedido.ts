import { IPedidoRepository } from "../ports/pedidoRepository";

interface MudarSituacaoPedidoDTO {
  idPedido: string;
  idSituacao: string;
}

export class MudarSituacaoPedido {
  private pedidoRepository: IPedidoRepository;

  constructor(pedidoRepository: IPedidoRepository) {
    this.pedidoRepository = pedidoRepository;
  }

  async execute(dto: MudarSituacaoPedidoDTO): Promise<string> {
    const { idPedido, idSituacao } = dto;
    const pedido = await this.pedidoRepository.findById(idPedido);

    if (pedido === null || Object.keys(pedido as object).length == 0) {
      throw new Error("Pedido não encontrado");
    }

    await this.pedidoRepository.updateSituationOrder(idPedido, idSituacao);

    return "Sucesso";
  }
}
