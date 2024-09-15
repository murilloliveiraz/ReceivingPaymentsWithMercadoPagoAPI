# Integração Mercado Pago API

Este repositório contém o código backend para integração com a API do Mercado Pago, implementando pagamentos via PIX e cartão de crédito. Também inclui um frontend Angular para testes dos componentes de pagamento.

## Tecnologias Utilizadas

- Backend: .NET
- Frontend: Angular
- API: Mercado Pago Checkout API

## Funcionalidades

- Integração com PIX
- Integração com cartão de crédito
- Frontend de teste para ambos os métodos de pagamento
- Configuração de webhook para notificações de pagamento

## Documentação Oficial

- [Integração com PIX](https://www.mercadopago.com.br/developers/pt/docs/checkout-api/integration-configuration/integrate-with-pix)
- [Integração com Cartão de Crédito](https://www.mercadopago.com.br/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform)

## Tutoriais de Referência

- [Integração com Cartão de Crédito](https://youtu.be/Lqlt95q5yss?si=PkvO9sNlSSLZA77k)
- [Integração com PIX](https://youtu.be/NlEQ0fFUGB0?si=GBXmxbU-w7b_LCzK)
- [Integração com Webhook (usando ngrok)](https://youtu.be/OApt3DZ2fY8?si=Xt2M1vIQOyV2lwT-)

## Configuração do Projeto

1. Clone o repositório
2. Configure as credenciais do Mercado Pago no backend
3. Execute o backend .NET
4. Navegue até o diretório do frontend e execute `npm install`
5. Inicie o frontend Angular com `ng serve`

## Configuração do Webhook

Para receber notificações de pagamento em tempo real:

1. Instale e configure o ngrok
2. Exponha sua porta local usando ngrok
3. Configure a URL do webhook no painel do Mercado Pago

## Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue para discutir mudanças importantes antes de criar um pull request.# ReceivingPaymentsWithMercadoPagoAPI
