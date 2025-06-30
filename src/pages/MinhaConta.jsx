import React from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import UserDashboard from '../components/user/UserDashboard'

export default function MinhaConta() {
    return (
        <Container>
            <title>Minha Conta</title>

            <Title>Painel do Usuário</Title>
            <UserDashboard />
            <div></div>
        </Container>
    )
}
