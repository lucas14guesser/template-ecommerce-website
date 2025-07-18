import React, { useState } from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import UserInfos from '../components/user/UserInfos';
import BtnVoltar from '../services/BtnVoltar';

export default function UserData() {
    return (
        <Container>
            <BtnVoltar />
            <title>Meus Dados</title>
            <Title>Meus Dados</Title>
            <UserInfos />
            <div></div>
        </Container>
    )
}
