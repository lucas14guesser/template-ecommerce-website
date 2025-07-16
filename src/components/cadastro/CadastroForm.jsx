import React, { useEffect, useState } from 'react'
import { FormC } from '../login/LoginStyles'
import { BtnDefault, FormInput, Formulario, LinkDefault, Title } from '../../styles/GlobalStyles'
import { handleCadastro, inputInfosCad } from './CadastroServices'
import { useNavigate } from 'react-router-dom'
import ModalErrorCadastro from './ModalErrorCadastro'
import ModalOverlay from '../modals/ModalOverlay'

export default function CadastroForm() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [modal, setModal] = useState(false);

    const inputs = inputInfosCad(nome, setNome, email, setEmail, pass, setPass);

    useEffect(() => {
        if (error) {
            setModal(true)
        }
    }, [error])

    return (
        <FormC>
            <Formulario>
                <Title>Crie sua conta</Title>
                {inputs.map((info, index) => (
                    <div key={index}>
                        <FormInput name={info.nome} type={info.tipo} placeholder={info.placeholder} value={info.valor} onChange={(e) => info.change(e.target.value)} required />
                    </div>
                ))}
                <BtnDefault onClick={(e) => handleCadastro(nome, email, pass, setError, navigate, e)}>Cadastrar</BtnDefault>
                <p>Já possui uma conta? <LinkDefault to='/login'>Entrar</LinkDefault></p>
            </Formulario>
            {modal && (
                <ModalOverlay onClose={() => {setModal(false), setError('')} }>
                    <ModalErrorCadastro error={error} />
                </ModalOverlay>
            )}
        </FormC>
    )
}
