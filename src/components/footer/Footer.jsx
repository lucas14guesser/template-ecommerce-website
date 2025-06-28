import React from 'react'
import { FooterC } from './FooterStyles'
import MapaFooter from './MapaFooter'
import PrivacidadeFooter from './PrivacidadeFooter'
import LocalizacaoFooter from './LocalizacaoFooter'


export default function Footer() {
    return (
        <FooterC>
            <MapaFooter />
            <PrivacidadeFooter />
            <LocalizacaoFooter />
        </FooterC>
    )
}
