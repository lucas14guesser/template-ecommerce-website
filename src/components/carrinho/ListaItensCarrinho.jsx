import React from 'react'
import { CartItem, CartList } from './CarrinhoStyles'
import { produtosCarrinho } from './CarrinhoServices'

export default function ListaItensCarrinho() {
    return (
        <CartList>
            {produtosCarrinho.map(produto => (
                <CartItem key={produto.produtos[0].id}>
                    <img src={produto.produtos[0].fotos[0].foto} alt={produto.produtos[0].nome} />
                    <div>
                        <h2>{produto.produtos[0].nome}</h2>
                        <p>Quantidade: {produto.quantidade}</p>
                        <p>Preço: R$ {(produto.produtos[0].preco * produto.quantidade).toFixed(2)}</p>
                    </div>
                </CartItem>
            ))}
        </CartList>
    )
}
