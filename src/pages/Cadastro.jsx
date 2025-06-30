import React from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import CadastroForm from '../components/cadastro/CadastroForm'

export default function Cadastro() {
  return (
    <Container>
      <title>Cadastro</title>

      <Title>Área de Cadastro</Title>
      <CadastroForm />
      <div></div>
    </Container>
  )
}
