import React, { useEffect, useState } from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import UserDashboard from '../components/user/UserDashboard'
import AdminDashboard from '../components/admin/AdminDashboard'
import { useAuth } from '../components/context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function MinhaConta() {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login')
        }
    }, [loading, user, navigate])

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!user) {
        return null;
    }

    return (
        <Container>
            <title>Minha Conta</title>

            <Title>Painel do Usuário</Title>
            {user.user_role === 'admin' ? (
                <AdminDashboard />
            ) : (
                <UserDashboard />
            )}
            <div></div>
        </Container>
    )
}
