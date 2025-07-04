import React from 'react'
import { IconesP, Subcontainer, Title } from '../../styles/GlobalStyles'
import { FunctionsUser, GridFunctionsUser } from './UserStyles'
import { InfosGrid, users } from './UserServices'

export default function UserDashboard() {
    return (
        <Subcontainer>
            {users.map((user, index) => (
                <Title key={index}>Boas-vindas {user.nome}</Title>
            ))}
            <GridFunctionsUser>
                {InfosGrid.map((info, index) => (
                    <FunctionsUser key={index} to={info.link}>
                        <IconesP>{info.icone}</IconesP>
                        <p>{info.funcao}</p>
                    </FunctionsUser>
                ))}
            </GridFunctionsUser>
        </Subcontainer>
    )
}
