import React, { useState } from 'react'
import { BtnDefault, DivFlexRow } from '../../styles/GlobalStyles'
import { functionModalContent, handleCloseModal, handleOpenModal } from './AdminServices';
import ModalOverlay from '../modals/ModalOverlay';

export default function AdminProdutosFunctions() {
    const [modal, setModal] = useState(false);
    const [type, setType] = useState(null);

    return (
        <>
            <DivFlexRow>
                <BtnDefault onClick={() => handleOpenModal(setModal, 'cadastrar', setType)}>Cadastrar Produto</BtnDefault>
                <BtnDefault onClick={() => handleOpenModal(setModal, 'editar', setType)}>Editar Produto</BtnDefault>
                <BtnDefault onClick={() => handleOpenModal(setModal, 'excluir', setType)}>Excluir Produto</BtnDefault>
            </DivFlexRow>
            {modal && (
                <ModalOverlay onClose={() => handleCloseModal(setModal, setType)}>
                    {functionModalContent[type]}
                </ModalOverlay>
            )}
        </>
    )
}
