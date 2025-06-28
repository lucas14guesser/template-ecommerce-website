import React from 'react'
import { FooterTopic } from './FooterStyles'
import { LinksCategorias } from '../../styles/GlobalStyles'


export default function LocalizacaoFooter() {
  return (
        <FooterTopic>
            <h1>Localização</h1>

            <LinksCategorias to="https://maps.app.goo.gl/38BpCphP6Qwyqc8QA" target='_blank' title='Endereço'>Rua Teste Teste Teste, 999</LinksCategorias>
        </FooterTopic>
  )
}
