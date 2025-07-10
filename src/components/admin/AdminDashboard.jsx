import React from 'react'
import { IconesP, Subcontainer, Title } from '../../styles/GlobalStyles'
import { admins, InfosGridAdmin } from '../user/UserServices'
import { FunctionsUser, GridFunctionsUser } from '../user/UserStyles'

export default function AdminDashboard() {
  return (
        <Subcontainer>
            {admins.map((admin, index) => (
                <Title key={index}>Boas-vindas {admin.nome}</Title>
            ))}
            <GridFunctionsUser>
                {InfosGridAdmin.map((info, index) => (
                    <FunctionsUser key={index} to={info.link}>
                        <IconesP>{info.icone}</IconesP>
                        <p>{info.funcao}</p>
                    </FunctionsUser>
                ))}
            </GridFunctionsUser>
        </Subcontainer>
  )
}
