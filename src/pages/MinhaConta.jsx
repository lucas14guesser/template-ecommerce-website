import React, { useState } from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import UserDashboard from '../components/user/UserDashboard'
import AdminDashboard from '../components/admin/AdminDashboard'

export default function MinhaConta() {
    const [role, setRole] = useState('admin')

    return (
        <Container>
            <title>Minha Conta</title>

            <Title>Painel do Usuário</Title>
            {role === 'admin' ? (
                <AdminDashboard />
            ) : (
                <UserDashboard />
            )}
            <div></div>
        </Container>
    )
}
