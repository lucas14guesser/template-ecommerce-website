import React from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import LoginForm from '../components/login/LoginForm'

export default function Login() {
    return (
        <Container>
            <title>Entrar</title>

            <Title>Área de login</Title>
            <LoginForm />
            <div></div>
        </Container>
    )
}
