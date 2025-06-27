import React from 'react'
import { LinksNav } from '../../../services/navbar/NavbarServices'
import { LinksCategoriasNav, ListNav } from '../../../styles/navbar/NavbarStyles'

export default function LinksProdutosNav() {
    return (
        <>
            <ListNav>
                {LinksNav.map((links, index) => (
                    <li>
                        <LinksCategoriasNav key={index} to={links.link} title={links.nome}>{links.nome}</LinksCategoriasNav>
                    </li>
                ))}
            </ListNav>

        </>
    )
}
