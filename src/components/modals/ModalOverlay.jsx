import React from 'react'
import { BtnDefault, ModalC, ModalContent } from '../../styles/GlobalStyles'

export default function ModalOverlay({ onClose, children }) {
  return (
    <ModalC>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        <BtnDefault onClick={onClose} style={{marginTop: '1rem'}}>Fechar</BtnDefault>
      </ModalContent>
    </ModalC>
  )
}
