import React from 'react'
import { FormC } from '../login/LoginStyles'
import { BtnDefault, FormInput, Formulario, LinkDefault, Title } from '../../styles/GlobalStyles'
import { InputInfosCad } from './CadastroServices'

export default function CadastroForm() {
    return (
        <FormC>
            <Formulario>
                <Title>Crie sua conta</Title>
                {InputInfosCad.map((info, index) => (
                    <div key={index}>
                        <FormInput name={info.nome} type={info.tipo} placeholder={info.placeholder} required />
                    </div>
                ))}
                <BtnDefault>Cadastrar</BtnDefault>
                <p>Já possui uma conta? <LinkDefault to='/login'>Entrar</LinkDefault></p>
            </Formulario>
        </FormC>
    )
}
