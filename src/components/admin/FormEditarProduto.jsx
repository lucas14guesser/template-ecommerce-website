import React from 'react'
import { BtnDefault, FormInput, Formulario, Title } from '../../styles/GlobalStyles'
import { produtosEdit } from './AdminServices'

export default function FormEditarProduto() {
    return (
        <Formulario>
            <Title>Editar Produto</Title>
            {produtosEdit.map((pe, index) => (
                <FormInput key={index} type={pe.tipo} placeholder={pe.placeholder} id={pe.nome} name={pe.nome} />
            ))}
            <BtnDefault type='submit'>Editar</BtnDefault>
        </Formulario>
    )
}
