import React, { useEffect, useState } from 'react'
import { FormC } from './LoginStyles'
import { BtnDefault, FormInput, Formulario, LinkDefault, Title } from '../../styles/GlobalStyles'
import { handleLogin, inputInfos } from './LoginServices'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginForm() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const input = inputInfos(email, setEmail, pass, setPass);

    return (
        <FormC>
            <Formulario onSubmit={(e) => handleLogin(email, pass, navigate, login, e)}>
                <Title>Entre em sua conta</Title>
                {input.map((info, index) => (
                    <div key={index}>
                        <FormInput type={info.tipo} name={info.nome} placeholder={info.placeholder} value={info.valor} onChange={(e) => info.change(e.target.value)} />
                    </div>
                ))}
                <BtnDefault type='submit'>Entrar</BtnDefault>
                <p>Não possui uma conta? <LinkDefault to="/cadastro">Cadastre-se</LinkDefault></p>
            </Formulario>
        </FormC>
    )
}
