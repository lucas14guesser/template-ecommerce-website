import React, { useState } from 'react'
import { Container, Subcontainer, Title } from '../styles/GlobalStyles'
import AdminProdutosFunctions from '../components/admin/AdminProdutosFunctions'
import BtnVoltar from '../services/BtnVoltar'
import ListaProdutos from '../components/admin/ListaProdutos'
import BuscaProduto from '../components/admin/BuscaProduto'

export default function AdmProdutos() {
  const [busca, setBusca] = useState('');

  return (
    <Container>
      <BtnVoltar />
      <title>Produtos</title>
      <Title>Produtos</Title>
      <Subcontainer style={{alignItems: 'center'}}>
        <AdminProdutosFunctions />
        <BuscaProduto busca={busca} setBusca={setBusca} />
        <ListaProdutos busca={busca} />
      </Subcontainer>
    </Container>
  )
}
