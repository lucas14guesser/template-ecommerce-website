import React from 'react'
import { IconesP, Subcontainer, Title } from '../../styles/GlobalStyles'
import { FunctionsUser, GridFunctionsUser } from './UserStyles'
import { InfosGrid } from './UserServices'
import { useAuth } from '../context/AuthContext'
import { handleLogout } from '../login/LoginServices'
import { useNavigate } from 'react-router-dom'

export default function UserDashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <Subcontainer>
            <Title style={{textTransform: 'none'}}>Boas-vindas, {user.user.user_nome}</Title>
            <GridFunctionsUser>
                {InfosGrid.map((info, index) => (
                    <FunctionsUser key={index} to={info.link} onClick={() => handleLogout(info, info.isLogout, logout, navigate)}>
                        <IconesP>{info.icone}</IconesP>
                        <p>{info.funcao}</p>
                    </FunctionsUser>
                ))}
            </GridFunctionsUser>
        </Subcontainer>
    )
}
