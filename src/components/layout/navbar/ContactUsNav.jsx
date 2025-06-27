import React from 'react'
import { ContactContainer, LinksCategoriasNav } from '../../../styles/navbar/NavbarStyles'

export default function ContactUsNav() {
  return (
    <ContactContainer>
        <LinksCategoriasNav to="https://web.whatsapp.com/" target='_blank' title='WhatsApp'>(00) 999999999</LinksCategoriasNav>
        <LinksCategoriasNav to="https://mail.google.com/" target='_blank' title='E-mail'>email@email.com</LinksCategoriasNav>
    </ContactContainer>
  )
}
