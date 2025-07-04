import React from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import InformacoesPedidos from '../components/pedidos/InformacoesPedidos'


export default function Pedidos() {

    return (
        <Container>
            <title>Meus Pedidos</title>
            <Title>Meus Pedidos</Title>
            <InformacoesPedidos />
            <div></div>
        </Container>
    )
}
