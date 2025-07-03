import React, { useState } from 'react'
import { BtnDefault, Container, DivFlexColm, DivFlexRow, FormInput, Title } from '../styles/GlobalStyles'
import { infosUserData } from '../components/user/UserServices'
import { handleModal } from '../services/GlobalServices';
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
