import React from 'react'
import InfoPerguntasFrequentes from './InfoPerguntasFrequentes'
import { Container, Title } from '../../styles/GlobalStyles'
import BtnVoltar from '../../services/BtnVoltar'

export default function PerguntasFrequentes() {
  return (
    <Container>
      <BtnVoltar />
      <title>Perguntas Frequentes</title>
      <Title>Perguntas Frequentes</Title>
      <InfoPerguntasFrequentes />
      <div></div>
    </Container>
  )
}
