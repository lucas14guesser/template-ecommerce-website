import React from 'react'
import { BtnDefault, FormInput, Formulario, Title } from '../../styles/GlobalStyles'
import { produtosField } from './AdminServices'

export default function FormCadastroProduto() {
    return (
        <Formulario>
            <Title>Cadastrar Produto</Title>
            {produtosField.map((pf, index) => (
                <FormInput key={index} type={pf.tipo} placeholder={pf.placeholder} id={pf.nome} name={pf.nome} />
            ))}
            <BtnDefault type='submit'>Cadastrar</BtnDefault>
        </Formulario>
    )
}
