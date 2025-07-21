import React, { useState } from 'react'
import { BtnDefault, DivFlexRow } from '../../styles/GlobalStyles'
import { btnFunctionList, functionModalContent, handleCloseModal, handleOpenModal } from './AdminServices';
import ModalOverlay from '../modals/ModalOverlay';

export default function AdminProdutosFunctions() {
    const [modal, setModal] = useState(false);
    const [type, setType] = useState(null);

    return (
        <>
            <DivFlexRow>
                {btnFunctionList.map((btnF, index) => (
                    <BtnDefault key={index} onClick={() => handleOpenModal(setModal, btnF.tipo, setType)}>{btnF.txt}</BtnDefault>
                ))}
            </DivFlexRow>
            {modal && (
                <ModalOverlay onClose={() => handleCloseModal(setModal, setType)}>
                    {functionModalContent[type]}
                </ModalOverlay>
            )}
        </>
    )
}
