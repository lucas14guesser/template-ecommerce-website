import React from 'react'
import { LinkSocialMedia, ListNav } from './NavbarStyles'
import { SocialLinksNav } from './NavbarServices'



export default function SocialNav() {
    return (
        <ListNav>
            {SocialLinksNav.map((social, index) => (
                <li key={index}>
                    <LinkSocialMedia to={social.link} target='_blank' title={social.link}>{social.icone}</LinkSocialMedia>
                </li>
            ))}
        </ListNav>
    )
}
