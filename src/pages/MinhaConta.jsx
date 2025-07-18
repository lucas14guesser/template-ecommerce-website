import React from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import UserDashboard from '../components/user/UserDashboard'
import AdminDashboard from '../components/admin/AdminDashboard'
import { useAuth } from '../components/context/AuthContext'
import BtnVoltar from '../services/BtnVoltar'

export default function MinhaConta() {
    const { user } = useAuth();

    return (
        <Container>
            <BtnVoltar />
            <title>Minha Conta</title>

            <Title>Painel do Usuário</Title>
            {user.user.user_role === 'admin' ? (
                <AdminDashboard />
            ) : (
                <UserDashboard />
            )}
            <div></div>
        </Container>
    )
}
