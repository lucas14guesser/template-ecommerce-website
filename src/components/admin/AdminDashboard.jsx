import React from 'react'
import { IconesP, Subcontainer, Title } from '../../styles/GlobalStyles'
import { InfosGridAdmin } from '../user/UserServices'
import { FunctionsUser, GridFunctionsUser } from '../user/UserStyles'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../login/LoginServices';

export default function AdminDashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <Subcontainer>
            <Title style={{textTransform: 'none'}}>Boas-vindas, {user.user.user_nome}</Title>
            <GridFunctionsUser>
                {InfosGridAdmin.map((info, index) => (
                    <FunctionsUser key={index} to={info.link} onClick={() => handleLogout(info, info.isLogout, logout, navigate)}>
                        <IconesP>{info.icone}</IconesP>
                        <p>{info.funcao}</p>
                    </FunctionsUser>
                ))}
            </GridFunctionsUser>
        </Subcontainer>
    )
}
