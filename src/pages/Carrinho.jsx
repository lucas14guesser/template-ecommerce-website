import React from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import ListaItensCarrinho from '../components/carrinho/ListaItensCarrinho'
import ValorProdutosCarrinho from '../components/carrinho/ValorProdutosCarrinho'

export default function Carrinho() {
  return (
    <Container>
      <title>Meu Carrinho</title>
      <Title>Meu Carrinho</Title>
      <ListaItensCarrinho />
      <ValorProdutosCarrinho />
    </Container>
  )
}
