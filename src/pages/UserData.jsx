import React, { useState } from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import UserInfos from '../components/user/UserInfos';

export default function UserData() {
    return (
        <Container>
            <title>Meus Dados</title>
            <Title>Meus Dados</Title>
            <UserInfos />
            <div></div>
        </Container>
    )
}
