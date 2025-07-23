import React, { useState } from 'react'
import { BtnDefault, FormInput, Formulario, Title } from '../../styles/GlobalStyles'
import { handleExcluirProduto, produtosRM } from './AdminServices'
import { useAuth } from '../context/AuthContext';

export default function FormExcluirProduto() {
    const { user } = useAuth();
    const [produtoId, setProdutoId] = useState('');
    
    return (
        <Formulario onSubmit={(e) => handleExcluirProduto(e, produtoId, user.token)}>
            <Title>Excluir Produto</Title>
            {produtosRM.map((pr, index) => (
                <FormInput key={index} type={pr.tipo} placeholder={pr.placeholder} value={produtoId} onChange={(e) => setProdutoId(e.target.value)} />
            ))}
            <BtnDefault type='submit'>Excluir</BtnDefault>
        </Formulario>
    )
}
