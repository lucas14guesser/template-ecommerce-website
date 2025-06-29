import React from 'react'
import { getYear } from './FooterServices'

export default function CopyrightFooter() {
  return (
    <p>&copy; {getYear()} Desenvolvido por LG Tech. Todos os direitos reservados.</p>
  )
}
