import React from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import InformacoesPedidos from '../components/pedidos/InformacoesPedidos'
import BtnVoltar from '../services/BtnVoltar'


export default function Pedidos() {

    return (
        <Container>
            <BtnVoltar />
            <title>Meus Pedidos</title>
            <Title>Meus Pedidos</Title>
            <InformacoesPedidos />
            <div></div>
        </Container>
    )
}
