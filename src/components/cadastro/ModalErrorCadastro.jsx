import React from 'react'
import { Container, Title } from '../../styles/GlobalStyles'

export default function ModalErrorCadastro({ error }) {
  return (
    <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
        <Title>Ocorreu um erro</Title>
        <p>{error}</p>
    </Container>
  )
}
