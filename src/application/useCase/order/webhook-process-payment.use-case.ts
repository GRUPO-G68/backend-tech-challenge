import { OrderRepositoryAdapter } from "src/adapters/order/order.repository";

export class WebhookProcessPaymentUseCase{
    topicType = {
        "payment": this.topicPayment,
        "merchant_order": this.topicMerchantOrder
    }
    execute(repo: OrderRepositoryAdapter, id: string, topic: string ) {

        const hasTopic = !!topic

        if(!hasTopic) {
            /**Não sei se isso ocorre na API do ML, mas se acontece 
             * acontece seria estourar/logar um erro
             */
            return
        }

        return this.topicType[topic](repo, id)

    }

    private async topicPayment(repo: OrderRepositoryAdapter, id: string){
        /** Para a integração com o ML precisamos criar um gateway 
         * que vai usar o SDK do ML para buscar pedidos e pagamentos
         * na base deles, e dai atualizar do nosso lado
         */

        // Primeiro chamariamos o gateway passando o id 
        
        // Com o pedido retornado pelo SDK do ML lemos o status dele
        const statusPedido = 2
        
        //Pegamos a referencia do pedido no nosso db usando o rep
        const order = await repo.findById(id)

        order.status = statusPedido
        //processamos o status do ML no nosso banco de dados
        repo.save(order)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private topicMerchantOrder(repo: OrderRepositoryAdapter, id: string) {
        /** Esse caso deve ser uso se formos usar o ML para criar pedidos 
         * do nosso lado ao inves do endpoint de pedido que temos hoje.
         * Provavelmente que seja necessário para que seja possível buscar o pedido 
         *  na hora de fazer o update pelo method 'topicPayment'
         */
    }
}