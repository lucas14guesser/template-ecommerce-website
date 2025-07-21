import React, { useState } from 'react'
import { BtnDefault, FormInput, Formulario, SelectModalWidht, Title } from '../../styles/GlobalStyles'
import { handleCadastroProduto, handleChangeCor, handleChangeFile, produtosField } from './AdminServices'
import CorTamanho from './CorTamanho';
import { LabelCheck } from './AdminStyles';
import { useAuth } from '../context/AuthContext';
import { listCategorias } from '../../services/GlobalServices';

export default function FormCadastroProduto() {
    const { user } = useAuth();
    const [produto, setProduto] = useState({ produto_nome: '', produto_preco: '', produto_categoria: '', produto_lancamento: false, produto_foto: [], produto_cor: [] });
    return (
        <Formulario onSubmit={(e) => handleCadastroProduto(produto.produto_nome, produto.produto_preco, produto.produto_categoria, produto.produto_lancamento, produto.produto_foto, produto.produto_cor, e, setProduto, user.token)}>
            <Title>Cadastrar Produto</Title>
            <SelectModalWidht value={produto.produto_categoria} onChange={(e) => setProduto(prev => ({ ...prev, produto_categoria: e.target.value }))} >
                <option value="" disabled hidden>Categorias</option>
                {listCategorias.map((cat, indexCat) => (
                    <option key={indexCat} value={cat.nome}>{cat.nome}</option>
                ))}
            </SelectModalWidht>
            {produtosField.map((pf, index) => (
                pf.tipo === 'checkbox' ? (
                    <LabelCheck key={index}>
                        {pf.placeholder}
                        <FormInput type={pf.tipo} name={pf.nome} onChange={(e) => handleChangeFile(e, setProduto)} style={{ width: '24rem', cursor: 'pointer' }} />
                    </LabelCheck>
                ) : (
                    <FormInput key={index} type={pf.tipo} placeholder={pf.placeholder} name={pf.nome} onChange={(e) => handleChangeFile(e, setProduto)} multiple={pf.tipo === 'file'} />
                )
            ))}
            <CorTamanho cores={produto.produto_cor} setCores={(novas => handleChangeCor(novas, setProduto))} />
            <BtnDefault type='submit'>Cadastrar</BtnDefault>
        </Formulario>
    )
}
