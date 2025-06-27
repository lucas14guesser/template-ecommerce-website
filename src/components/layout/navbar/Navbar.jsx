import React from 'react'
import LinksProdutosNav from './LinksProdutosNav'
import SocialNav from './SocialNav'
import LinkHomeNav from './LinkHomeNav'
import SearchNav from './SearchNav'
import { Nav, NavbarContainer } from '../../../styles/navbar/NavbarStyles'
import LinksUserNav from './LinksUserNav'
import ContactUsNav from './ContactUsNav'

export default function Navbar() {
  return (
    <Nav>
      <NavbarContainer> {/*Navbar 1*/}
        <SocialNav />
        <LinkHomeNav />
        <LinksUserNav />
      </NavbarContainer>

      <NavbarContainer> {/*Navbar 2*/}
        <SearchNav />        
        <LinksProdutosNav />
        <ContactUsNav />
      </NavbarContainer>
    </Nav>
  )
}
