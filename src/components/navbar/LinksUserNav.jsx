import React from 'react'
import { LinkSocialMedia, ListNav } from './NavbarStyles'
import { UserLinks } from './NavbarServices'


export default function LinksUserNav() {
  return (
        <ListNav>
            {UserLinks.map((user, index) => (
                <li key={index}>
                    <LinkSocialMedia to={user.link} title={user.nome}>{user.icon}</LinkSocialMedia>
                </li>
            ))}
        </ListNav>
  )
}
