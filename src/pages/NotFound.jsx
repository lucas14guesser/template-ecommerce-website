import React from 'react'
import { Container, ImageBackground, Title } from '../styles/GlobalStyles'

export default function NotFound() {
  return (
    <Container style={{alignItems: 'center', gap:'0'}}>
        <title>Página não encontrada</title>
        <Title>Desculpe, a página que você acessou não foi encontrada ou não existe...</Title>
        <ImageBackground src="https://res.cloudinary.com/dub80scyn/image/upload/v1753380717/not-found_ztwjyp.png" alt="Imagem Not Found" />
    </Container>
  )
}
