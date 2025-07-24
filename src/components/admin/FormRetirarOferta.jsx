import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { handleRetirarOferta, produtosRM } from './AdminServices';
import { BtnDefault, FormInput, Formulario, Title } from '../../styles/GlobalStyles';

export default function FormRetirarOferta() {
    const { user } = useAuth();
    const [produtoId, setProdutoId] = useState('');
    
  return (
        <Formulario onSubmit={(e) => handleRetirarOferta(e, produtoId, user.token)}>
            <Title>Excluir Produto</Title>
            {produtosRM.map((pr, index) => (
                <FormInput key={index} type={pr.tipo} placeholder={pr.placeholder} value={produtoId} onChange={(e) => setProdutoId(e.target.value)} />
            ))}
            <BtnDefault type='submit'>Retirar</BtnDefault>
        </Formulario>
  )
}
