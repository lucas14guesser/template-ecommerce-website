import React from 'react'
import { FormC } from './LoginStyles'
import { BtnDefault, FormInput, Formulario, LinkDefault, Title } from '../../styles/GlobalStyles'
import { InputInfos } from './LoginServices'

export default function LoginForm() {
    return (
        <FormC>
            <Formulario>
                <Title>Entre em sua conta</Title>
                {InputInfos.map((info, index) => (
                    <div key={index}>
                        <FormInput type={info.tipo} name={info.nome} placeholder={info.placeholder} required />
                    </div>
                ))}
                <BtnDefault>Entrar</BtnDefault>
                <p>Não possui uma conta? <LinkDefault to="/cadastro">Cadastre-se</LinkDefault></p>
            </Formulario>
        </FormC>
    )
}
