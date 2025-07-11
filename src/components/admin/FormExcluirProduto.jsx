import React from 'react'
import { BtnDefault, FormInput, Formulario, Title } from '../../styles/GlobalStyles'
import { produtosRM } from './AdminServices'

export default function FormExcluirProduto() {
    return (
        <Formulario>
            <Title>Excluir Produto</Title>
            {produtosRM.map((pr, index) => (
                <FormInput key={index} type={pr.tipo} placeholder={pr.placeholder} id={pr.nome} name={pr.nome} />
            ))}
            <BtnDefault type='submit'>Excluir</BtnDefault>
        </Formulario>
    )
}
