1. Atualizar a aplicação desenvolvida na FASE 1 refatorando o código para seguir os padrões clean code e clean architecture:
    - a. Alterar/criar as APIs: 
      - [ ] i. Checkout Pedido que deverá receber os produtos solicitados e retornar a identificação do pedido. 
      - [ ] ii. Consultar status pagamento pedido, que informa se o pagamento foi aprovado ou não. 
      - [ ] iii. Webhook para receber confirmação de pagamento aprovado ou recusado. 
      - [ ] iv. A lista de pedidos deverá retorná-los com suas descrições, ordenados com a seguinte regra: 
        - 1 Pronto > Em Preparação > Recebido; 
        - 2 Pedidos mais antigos primeiro e mais novos depois; 
        - 3 Pedidos com status Finalizado não devem aparecer na lista. v. Atualizar o status do pedido. 

      - [ ] vi. Como desafio extra, opcionalmente, você pode implementar a integração com Mercado Pago 
        para gerar o QRCode para pagamento e integrar com o WebHook para capturar os pagamentos. 
        Caso contrário, será necessário realizar o mock da parte de pagamentos. Como referência, acesse: site do mercado pago. 

2. Criar uma arquitetura em Kubernetes que atenda os seguintes requisitos: 
   - [ ] a. Os requisitos funcionais descritos nos itens anteriores (item problema). 
   - [ ] b. Escalabilidade com aumento e diminuição de Pods conforme demanda. 
   - [ ] c. Os arquivos manifestos (yaml) precisam estar no Github junto com a nova versão do código. 
  
3. Entrega da seguinte documentação no ReadMe: 
  - [ ] a. Desenho da arquitetura pensado por você, pessoa arquiteta de software, contemplando: 
    - [ ] i. Os requisitos do negócio (problema). 
    - [ ] ii. Os requisitos de infraestrutura: 

   - Você pode utilizar o MiniKube, Docker Kubernetes, AKS, EKS, GKE ou qualquer nuvem que você desenha. 

   - [ ] b. Collection com todas as APIs desenvolvidas com exemplo de requisição (que não seja vazia): 
     - i. Link do Swagger no projeto ou link para download da collection do Postman (JSON). 
      
   - [ ] c. Guia completo com todas as instruções para execução do projeto e a ordem de execução das APIs, 
      caso seja necessário. 
   
   - [ ] d. Link para vídeo demonstrando a arquitetura desenvolvida na nuvem ou localmente 
     - i. O vídeo deve ser postado no Youtube ou Vimeo. 
     - ii. Não esqueça de deixá-lo público ou não listado. No arquivo entregue na plataforma, é necessário somente colocar a URL do Github com as informações.