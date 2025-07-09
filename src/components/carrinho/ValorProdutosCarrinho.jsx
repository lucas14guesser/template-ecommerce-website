import React from 'react'
import { CheckoutButton, Summary } from './CarrinhoStyles'
import { subtotal } from './CarrinhoServices'

export default function ValorProdutosCarrinho() {
    return (
        <Summary>
            <h3>Subtotal: R$ {subtotal}</h3>
            <CheckoutButton>Finalizar Compra</CheckoutButton>
        </Summary>
    )
}
