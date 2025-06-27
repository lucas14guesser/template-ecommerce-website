import React from 'react'
import { SocialLinksNav } from '../../../services/navbar/NavbarServices'
import { LinkSocialMedia, ListNav } from '../../../styles/navbar/NavbarStyles'


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
