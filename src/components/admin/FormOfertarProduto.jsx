import React, { useState } from 'react'
import { BtnDefault, FormInput, Formulario, Title } from '../../styles/GlobalStyles'
import { handleOfferProduto, produtosOffer } from './AdminServices'
import { useAuth } from '../context/AuthContext';

export default function FormOfertarProduto() {
  const { user } = useAuth();
  const [produtoId, setProdutoId] = useState('');
  const [novoPreco, setNovoPreco] = useState('');

  const inputsProdutosOffer = produtosOffer(produtoId, setProdutoId, novoPreco, setNovoPreco);

  return (
        <Formulario onSubmit={(e) => handleOfferProduto(e, produtoId, novoPreco, user.token)}>
            <Title>Ofertar Produto</Title>
            {inputsProdutosOffer.map((po, index) => (
                <FormInput key={index} type={po.tipo} placeholder={po.placeholder} value={po.valor} onChange={(e) => po.change(e.target.value)} />
            ))}
            <BtnDefault type='submit'>Ofertar</BtnDefault>
        </Formulario>
  )
}
