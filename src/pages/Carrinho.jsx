import React from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import ListaItensCarrinho from '../components/carrinho/ListaItensCarrinho'
import ValorProdutosCarrinho from '../components/carrinho/ValorProdutosCarrinho'
import BtnVoltar from '../services/BtnVoltar'

export default function Carrinho() {
  return (
    <Container>
      <BtnVoltar />
      <title>Meu Carrinho</title>
      <Title>Meu Carrinho</Title>
      <ListaItensCarrinho />
      <ValorProdutosCarrinho />
    </Container>
  )
}
