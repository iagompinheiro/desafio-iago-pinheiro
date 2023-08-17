# CAIXA DA LANCHONETE

Fui desafiado para construir a lógica que calcula o valor de uma compra de acordo com o cardápio, regras e descontos de uma Lanchonete.

## Sobre o projeto

Este é um programa de fluxo de caixa de uma lanchonete em JavaScript. A classe "CaixaDaLanchonete" simula um sistema de caixa para uma lanchonete, onde os clientes podem fazer pedidos de itens do cardápio e calcular o valor total da compra com base nos itens escolhidos e na forma de pagamento. 

## Funcionalidades 

Definir Itens e Pagamentos: Ele cria uma lista de itens disponíveis com suas descrições e preços, além de listar as formas de pagamento aceitas (débito, crédito, dinheiro).

Validar o Pedido: Ele verifica se o pedido feito pelo cliente é válido. Isso inclui verificar se os itens pedidos, quantidades e se os combos estão corretos.

Calcular o Valor: Calcula o valor total do pedido com base nos itens selecionados e na forma de pagamento escolhida. Ele aplica descontos para pagamentos em dinheiro e acréscimos para pagamentos em crédito.

Formatar Moeda: Formata para a moeda brasileira.

### CARDÁPIO

  | codigo    | descrição                   | valor   |
  |-----------|-----------------------------|---------|
  | cafe      | Café                        | R$ 3,00 |
  | chantily  | Chantily (extra do Café)    | R$ 1,50 |
  | suco      | Suco Natural                | R$ 6,20 |
  | sanduiche | Sanduíche                   | R$ 6,50 |
  | queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |
  | salgado   | Salgado                     | R$ 7,25 |
  | combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |
  | combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |

### FORMAS DE PAGAMENTO
Atualmente a Lanchonete aceita as seguintes formas de pagamento:
 - dinheiro
 - debito
 - credito

### DESCONTOS E TAXAS
 - Pagamento em dinheiro tem 5% de desconto
 - Pagamento a crédito tem acréscimo de 3% no valor total

### OUTRAS REGRAS

- Caso item extra seja informado num pedido que não tenha o respectivo item principal, apresentar mensagem "Item extra não pode ser pedido sem o principal".
- Combos não são considerados como item principal.
- É possível pedir mais de um item extra sem precisar de mais de um principal.
- Se não forem pedidos itens, apresentar mensagem "Não há itens no carrinho de compra!"
- Se a quantidade de itens for zero, apresentar mensagem "Quantidade inválida!".
- Se o código do item não existir, apresentar mensagem "Item inválido!"
- Se a forma de pagamento não existir, apresentar mensagem "Forma de pagamento inválida!"
