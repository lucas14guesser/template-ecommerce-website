import React from 'react'
import { LinkHome } from '../../../services/navbar/NavbarServices'
import { LinkHomeTxt } from '../../../styles/navbar/NavbarStyles'

export default function LinkHomeNav() {
    return (
        <>
            {LinkHome.map((home, index) => (
                <LinkHomeTxt key={index} to={home.link}>{home.nome}</LinkHomeTxt>
            ))}
        </>

    )
}
