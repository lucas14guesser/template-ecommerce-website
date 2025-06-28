import React from 'react'
import { Nav, NavbarContainer } from './NavbarStyles'
import SocialNav from './SocialNav'
import LinkHomeNav from './LinkHomeNav'
import LinksUserNav from './LinksUserNav'
import SearchNav from './SearchNav'
import LinksProdutosNav from './LinksProdutosNav'
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
