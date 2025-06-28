import React from 'react'
import { FooterList, FooterTopic } from './FooterStyles'
import { LinksCategoria } from '../../services/GlobalServices'
import { LinksCategorias } from '../../styles/GlobalStyles'


export default function MapaFooter() {
    return (
        <FooterTopic>
            <h1>Mapa do Site</h1>

            <FooterList>
                {LinksCategoria.map((link, index) => (
                    <li key={index}>
                        <LinksCategorias to={link.link} title={link.nome}>{link.nome}</LinksCategorias>
                    </li>
                ))}
            </FooterList>
        </FooterTopic>
    )
}
