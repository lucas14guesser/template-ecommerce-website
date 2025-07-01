import React, { useState } from 'react'
import { HamburgerButton, ListCategoriasNav, MobileMenu, Overlay } from './NavbarStyles'
import { LinksCategoria } from '../../services/GlobalServices'
import { LinksCategorias } from '../../styles/GlobalStyles'
import { IoIosMenu } from "react-icons/io";
import { toggleMenuHamburguer } from './NavbarServices';


export default function LinksProdutosNav() {
    const [menuHamburguer, setMenuHamburguer] = useState(false);

    return (
        <>
            <HamburgerButton onClick={() => toggleMenuHamburguer(menuHamburguer, setMenuHamburguer)}>
                <p><IoIosMenu /></p>
            </HamburgerButton>
            <ListCategoriasNav>
                {LinksCategoria.map((links, index) => (
                    <li key={index}>
                        <LinksCategorias to={links.link} title={links.nome}>{links.nome}</LinksCategorias>
                    </li>
                ))}
            </ListCategoriasNav>
            {menuHamburguer && (
                <>
                    <Overlay onClick={() => toggleMenuHamburguer(menuHamburguer, setMenuHamburguer)} />
                    <MobileMenu>
                        {LinksCategoria.map((links, index) => (
                            <li key={index}>
                                <LinksCategorias to={links.link} title={links.nome} onClick={() => toggleMenuHamburguer(menuHamburguer, setMenuHamburguer)}>
                                    {links.nome}
                                </LinksCategorias>
                            </li>
                        ))}
                    </MobileMenu>
                </>
            )}
        </>
    )
}
