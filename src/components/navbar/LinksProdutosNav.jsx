import React from 'react'
import { ListNav } from './NavbarStyles'
import { LinksCategoria } from '../../services/GlobalServices'
import { LinksCategorias } from '../../styles/GlobalStyles'


export default function LinksProdutosNav() {
    return (
        <>
            <ListNav>
                {LinksCategoria.map((links, index) => (
                    <li key={index}>
                        <LinksCategorias to={links.link} title={links.nome}>{links.nome}</LinksCategorias>
                    </li>
                ))}
            </ListNav>

        </>
    )
}
