import React, { useState } from 'react'
import { BtnDefault, Container, DivFlexColm, DivFlexRow, FormInput, Formulario, Title } from '../../styles/GlobalStyles'
import { handleEdit, infosUserData } from './UserServices';
import { useAuth } from '../context/AuthContext';

export default function UserModalContent() {
    const { user, logout } = useAuth();
    const [nomeUser, setNomeUser] = useState(user?.user?.user_nome || '');
    const [enderecoUser, setEnderecoUser] = useState(user?.user?.user_endereco || '');
    const [telefoneUser, setTelefoneUser] = useState(user?.user?.user_telefone || '');
    const [cpfUser, setCPFUser] = useState(user?.user?.user_cpf || '');
    const [emailUser, setEmailUser] = useState(user?.user?.user_email || '');

    const dataUser = infosUserData(nomeUser, setNomeUser, enderecoUser, setEnderecoUser, telefoneUser, setTelefoneUser, cpfUser, setCPFUser, emailUser, setEmailUser);

    return (
        <Container>
            <Title>Editar Minhas Informações</Title>
            <Formulario onSubmit={(e) => handleEdit(nomeUser, enderecoUser, telefoneUser, cpfUser, user.user.user_id, user.token, logout, e)}>
                <DivFlexColm>
                    {dataUser.map((user, index) => (
                        <FormInput key={index} name={user.campo} placeholder={user.placeholder} value={user.getter} onChange={(e) => user.change(e.target.value)} disabled={user.isDisable || false} />
                    ))}
                </DivFlexColm>
                <DivFlexRow>
                    <BtnDefault type='submit'>Salvar</BtnDefault>
                    <BtnDefault type='button'>Redefinir E-mail</BtnDefault>
                    <BtnDefault type='button'>Redefinir Senha</BtnDefault>
                </DivFlexRow>
            </Formulario>
        </Container>
    )
}
