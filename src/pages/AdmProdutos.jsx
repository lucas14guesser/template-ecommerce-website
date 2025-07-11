import React from 'react'
import { Container, DivFlexColm, Subcontainer, Title } from '../styles/GlobalStyles'
import FormCadastroProduto from '../components/admin/FormCadastroProduto'
import FormEditarProduto from '../components/admin/FormEditarProduto'
import FormExcluirProduto from '../components/admin/FormExcluirProduto'
import TabelaProdutos from '../components/admin/TabelaProdutos'

export default function AdmProdutos() {
  return (
    <Container>
      <title>Produtos</title>
      <Title>Produtos</Title>
      <Subcontainer style={{ alignItems: 'center' }}>
        <DivFlexColm>
          <FormCadastroProduto />
          <FormEditarProduto />
          <FormExcluirProduto />
        </DivFlexColm>
        <TabelaProdutos />
      </Subcontainer>
    </Container>
  )
}
