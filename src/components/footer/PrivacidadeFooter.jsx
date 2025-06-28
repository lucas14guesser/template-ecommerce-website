import React from 'react'
import { FooterList, FooterTopic } from './FooterStyles'
import { PrivacidadeSeg } from './FooterServices'
import { LinksCategorias } from '../../styles/GlobalStyles'


export default function PrivacidadeFooter() {
    return (
        <FooterTopic>
            <h1>Segurança e Privacidade</h1>

            <FooterList>
                {PrivacidadeSeg.map((priv, index) => (
                    <li key={index}>
                        <LinksCategorias to={priv.link} title={priv.nome}>{priv.nome}</LinksCategorias>
                    </li>
                ))}
            </FooterList>
        </FooterTopic>
    )
}
