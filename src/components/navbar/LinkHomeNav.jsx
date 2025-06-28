import React from 'react'
import { LinkHomeTxt } from './NavbarStyles'
import { LinkHome } from './NavbarServices'


export default function LinkHomeNav() {
    return (
        <>
            {LinkHome.map((home, index) => (
                <LinkHomeTxt key={index} to={home.link}>{home.nome}</LinkHomeTxt>
            ))}
        </>

    )
}
