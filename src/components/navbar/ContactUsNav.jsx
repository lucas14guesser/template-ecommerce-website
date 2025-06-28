import React from 'react'
import { ContactContainer } from './NavbarStyles'
import { LinksCategorias } from '../../styles/GlobalStyles'

export default function ContactUsNav() {
  return (
    <ContactContainer>
        <LinksCategorias to="https://web.whatsapp.com/" target='_blank' title='WhatsApp'>(99) 999999999</LinksCategorias>
        <LinksCategorias to="https://mail.google.com/" target='_blank' title='E-mail'>email@email.com</LinksCategorias>
    </ContactContainer>
  )
}
