import React from 'react'
import { FooterC, FooterCopy, FooterG } from './FooterStyles'
import MapaFooter from './MapaFooter'
import PrivacidadeFooter from './PrivacidadeFooter'
import LocalizacaoFooter from './LocalizacaoFooter'
import CopyrightFooter from './CopyrightFooter'


export default function Footer() {
    return (
        <FooterG>
            <FooterC>
                <MapaFooter />
                <PrivacidadeFooter />
                <LocalizacaoFooter />
            </FooterC>
            <FooterCopy>
                <CopyrightFooter />
            </FooterCopy>
        </FooterG>

    )
}
