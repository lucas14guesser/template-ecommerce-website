import React from 'react'
import { Container, Subcontainer, Title } from '../styles/GlobalStyles'
import TabelaProdutos from '../components/admin/TabelaProdutos'
import AdminProdutosFunctions from '../components/admin/AdminProdutosFunctions'

export default function AdmProdutos() {
  return (
    <Container>
      <title>Produtos</title>
      <Title>Produtos</Title>
      <Subcontainer>
        <AdminProdutosFunctions />
        <TabelaProdutos />
      </Subcontainer>
    </Container>
  )
}
