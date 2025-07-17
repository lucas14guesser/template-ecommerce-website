import React, { useEffect, useState } from 'react'
import { FormC } from '../login/LoginStyles'
import { BtnDefault, FormInput, Formulario, LinkDefault, Title } from '../../styles/GlobalStyles'
import { handleCadastro, inputInfosCad } from './CadastroServices'
import { useNavigate } from 'react-router-dom'

export default function CadastroForm() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const inputs = inputInfosCad(nome, setNome, email, setEmail, pass, setPass);

    return (
        <FormC>
            <Formulario onSubmit={(e) => handleCadastro(nome, email, pass, navigate, e)}>
                <Title>Crie sua conta</Title>
                {inputs.map((info, index) => (
                    <div key={index}>
                        <FormInput name={info.nome} type={info.tipo} placeholder={info.placeholder} value={info.valor} onChange={(e) => info.change(e.target.value)} />
                    </div>
                ))}
                <BtnDefault type='submit'>Cadastrar</BtnDefault>
                <p>Já possui uma conta? <LinkDefault to='/login'>Entrar</LinkDefault></p>
            </Formulario>
        </FormC>
    )
}
