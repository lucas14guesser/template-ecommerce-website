import React, { useState } from 'react'
import { BtnDefault, DivFlexColm, DivFlexRow, FormInput, Title } from '../../styles/GlobalStyles'
import { infosUserData } from './UserServices'
import { handleModal } from '../../services/GlobalServices'
import UserModalContent from './UserModalContent';
import ModalOverlay from '../modals/ModalOverlay';

export default function UserInfos() {
    const [modal, setModal] = useState(false);

    return (
        <>
            <DivFlexColm>
                <Title>Minhas Informações</Title>
                {infosUserData.map((info, index) => (
                    <FormInput key={index} name={info.campo} value={info.valor} disabled />
                ))}
                <DivFlexRow>
                    <BtnDefault onClick={() => handleModal(modal, setModal)}>Editar Dados</BtnDefault>
                </DivFlexRow>
            </DivFlexColm>
            {modal && (
                <ModalOverlay onClose={() => setModal(false)}>
                    <UserModalContent />
                </ModalOverlay>
            )}
        </>
    )
}
