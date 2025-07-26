import React, { useEffect, useState } from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import LoginForm from '../components/login/LoginForm'
import { useAuth } from '../components/context/AuthContext'
import { useNavigate } from 'react-router-dom';
import BtnVoltar from '../services/BtnVoltar';
import Loading from '../services/Loading';

export default function Login() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        if (user) {
            navigate('/minha-conta');
        } else {
            setLoading(false);
        }
    }, [user]);

    if (loading) return <Loading />

    return (
        <Container>
            <BtnVoltar />
            <title>Entrar</title>

            <Title>Área de login</Title>
            <LoginForm />
        </Container>
    )
}
