import React, { useState } from 'react'
import { HamburgerButton, ListCategoriasNav, MobileMenu, Overlay } from './NavbarStyles'
import { LinksCategoria } from '../../services/GlobalServices'
import { LinksCategorias } from '../../styles/GlobalStyles'
import { IoIosMenu } from "react-icons/io";


export default function LinksProdutosNav() {
    const [menuHamburguer, setMenuHamburguer] = useState(false);

    const toggleMenu = () => {
        setMenuHamburguer(!menuHamburguer);
    }
    return (
        <>
            <HamburgerButton onClick={toggleMenu}>
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
                    <Overlay onClick={toggleMenu} />
                    <MobileMenu>
                        {LinksCategoria.map((links, index) => (
                            <li key={index}>
                                <LinksCategorias to={links.link} title={links.nome} onClick={toggleMenu}>
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
