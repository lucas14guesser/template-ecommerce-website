import React, { useEffect } from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import LoginForm from '../components/login/LoginForm'
import { useAuth } from '../components/context/AuthContext'
import { useNavigate } from 'react-router-dom';
import BtnVoltar from '../services/BtnVoltar';

export default function Login() {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/minha-conta');
        }
    }, [user]);

    return (
        <Container>
            <BtnVoltar />
            <title>Entrar</title>

            <Title>Área de login</Title>
            <LoginForm />
        </Container>
    )
}
