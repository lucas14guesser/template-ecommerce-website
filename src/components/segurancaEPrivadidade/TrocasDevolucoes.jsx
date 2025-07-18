import React from 'react'
import { Container, Title } from '../../styles/GlobalStyles'
import InfoTrocasEDevolucoes from './InfoTrocasEDevolucoes'
import BtnVoltar from '../../services/BtnVoltar'

export default function TrocasDevolucoes() {
  return (
    <Container>
      <BtnVoltar />
      <title>Trocas e Devoluções</title>
      <Title>Trocas e Devoluções</Title>
      <InfoTrocasEDevolucoes />
      <div></div>
    </Container>
  )
}
