import React, { useEffect, useState } from 'react'
import { BtnDefault, BtnIcon, Container, DivFlexRow, FormInput, Formulario, Title } from '../../styles/GlobalStyles'
import { FaEdit } from "react-icons/fa";
import { handleInputEdit } from './UserServices';
import { useAuth } from '../context/AuthContext';

export default function UserModalContent() {
    const { user } = useAuth();
    const [inputEdit, setInputEdit] = useState(false);
    const [nomeUser, setNomeUser] = useState('');

    useEffect(() => {
        if (user && user.user) {
            setNomeUser(user.user.user_nome);
        }
    }, [user]);

    return (
        <Container>
            <Title>Editar Minhas Informações</Title>
            <Formulario>
                <p>Clique no lápis para liberar a edição do campo</p>
                <DivFlexRow>
                    <FormInput name='nome' value={nomeUser} disabled={!inputEdit} onChange={(e) => setNomeUser(e.target.value)} />
                    <BtnIcon type='button' onClick={() => handleInputEdit(inputEdit, setInputEdit)}><FaEdit /></BtnIcon>
                </DivFlexRow>
                <DivFlexRow>
                    <BtnDefault type='submit'>Salvar</BtnDefault>
                    <BtnDefault type='button'>Redefinir E-mail</BtnDefault>
                    <BtnDefault type='button'>Redefinir Senha</BtnDefault>
                </DivFlexRow>
            </Formulario>
        </Container>
    )
}
