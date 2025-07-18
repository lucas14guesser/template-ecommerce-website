import React from 'react'
import { Container, Title } from '../../styles/GlobalStyles'
import InfoPoliticaPrivacidade from './InfoPoliticaPrivacidade'
import BtnVoltar from '../../services/BtnVoltar'

export default function PoliticaPrivacidade() {
  return (
    <Container>
      <BtnVoltar />
      <title>Política de Privacidade</title>
      <Title>Política de Privacidade</Title>
      <InfoPoliticaPrivacidade />
      <div></div>
    </Container>
  )
}
