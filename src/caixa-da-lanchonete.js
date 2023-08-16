class CaixaDaLanchonete {
    constructor() {
        this.itens= {
            cafe: { descricao: 'Cafe', valor: 3.00 },
            sucoNatural: { descricao: 'Suco natural', valor: 6.20 },
            sanduiche: { descricao: 'Sanduiche', valor: 6.50 },
            salgado: { descricao: 'Salgado', valor: 7.25 },
            chantily: { descricao: 'chantily (extra do cafe)', valor: 1.50 },
            queijo: { descricao: 'Queijo (extra do sanduiche)', valor: 2.00 },
            combo1: { descricao: '1 suco e 1 sanduiche', valor: 9.50 },
            combo2: { descricao: '1 cafe e 1 sanduiche', valor: 7.50 }
        }
        

        this.formaDePagamento = ['debito', 'credito', 'dinheiro'];
    }

        // Método para validar os itens do pedido
        validarPedido(itens) {

          // .length percorre a lista e verifica se possui itens no carrinho de compras.
            if(itens.length === 0) {
                return 'Não há itens no carrinho de compra!';
            }

            let principal = false;
            let extras = false;
            let combos = false;
            

        for (const itemQuantidade of itens) {
            const [item, quantidade] = itemQuantidade.split(','); // split faz a separação por virgula entre item e quantidade.

            if (!this.itens[item]) {
                return 'Item inválido!';
            }

            if (quantidade == 0) {
                return 'Quantidade inválida!';
        }
             // includes verifica na descrição do item se possui os caracteres "extra"
            if(this.itens[item].descricao.includes('extra')) {
            extras = true;
            } else {
            principal = true;
        }
            if(!principal && extras){
                return 'Item extra não pode ser pedido sem o principal';
        }
            if(this.itens[item].descricao.includes('1 suco e 1 sanduiche') && this.itens[item].descricao.includes('1 cafe e 1 sanduiche')){
                combos = true;
                } else {
                    principal = true;
        }
            if(!principal && combos && extras) {
                return 'Item extra não pode ser pedido sem o principal';
        }
            if(item == 'cafe' || item == 'queijo') {
                    if(principal = false){
                        return 'Item extra não pode ser pedido sem o principal';
                    }
        }

        }
    }

    // Método que calcula valor total da compra
    calcularValorDaCompra(formaDePagamento, itens) {

        const validacao = this.validarPedido(itens);

        if (validacao) {
            return validacao;
        }

        let valorTotal = 0;


        for (const itemQuantidade of itens) {
            const [item, quantidade] = itemQuantidade.split(',');

            valorTotal += this.itens[item].valor * parseInt(quantidade);
        }

        if (this.formaDePagamento.includes(formaDePagamento)) {
            if (formaDePagamento == 'dinheiro') {
                valorTotal *= 0.95; // Desconto de 5% para pagamento em dinheiro
            } else if (formaDePagamento == 'debito') {
                // Pagamento em débito se mantém o valorTotal 
            } else if (formaDePagamento == 'credito') {
                valorTotal *= 1.03; // Acréscimo de 3% para pagamento em crédito
            }
        } else {
            return 'Forma de pagamento inválida!';
        }

        valorTotal = Number(valorTotal.toFixed(2)); // Arredonda o valor total para 2 casas decimais


        // Método que realiza a conversão dos valores para a moeda brasileira.
        const formatterValorTotal = valorTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        })
        
        return formatterValorTotal;
    }
}

const caixa = new CaixaDaLanchonete();
console.log(caixa.calcularValorDaCompra('debito', ['cafe, 1', 'queijo, 1']));

export { CaixaDaLanchonete }