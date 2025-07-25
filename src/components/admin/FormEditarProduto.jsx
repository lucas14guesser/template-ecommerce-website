import React, { useEffect, useState } from 'react';
import { BtnDefault, FormInput, Formulario, SelectModalWidht, Title } from '../../styles/GlobalStyles';
import { handleEdicaoProduto, handleChangeCor, handleChangeFile, produtosEdit } from './AdminServices';
import CorTamanho from './CorTamanho';
import { LabelCheck } from './AdminStyles';
import { useAuth } from '../context/AuthContext';
import { listCategorias } from '../../services/GlobalServices';

export default function FormEditarProduto() {
    const { user } = useAuth();
    const [produto, setProduto] = useState({ produto_id: '', produto_nome: '', produto_preco: '', produto_lancamento: false, produto_categoria: '', produto_foto: [], produto_cor: [] });

    return (
        <Formulario onSubmit={(e) => handleEdicaoProduto(produto.produto_id, produto.produto_nome, produto.produto_preco, produto.produto_lancamento, produto.produto_categoria, produto.produto_foto, produto.produto_cor, e, setProduto, user.token)}>
            <Title>Editar Produto</Title>
            <SelectModalWidht value={produto.produto_categoria} onChange={(e) => setProduto(prev => ({ ...prev, produto_categoria: e.target.value }))}>
                <option value="" disabled hidden>Categorias</option>
                {listCategorias.map((cat, indexCat) => (
                    <option key={indexCat} value={cat.nome}>{cat.nome}</option>
                ))}
            </SelectModalWidht>

            {produtosEdit.map((pf, index) => (
                pf.tipo === 'checkbox' ? (
                    <LabelCheck key={index}>
                        {pf.placeholder}
                        <FormInput type={pf.tipo} name={pf.nome} checked={!!produto[pf.nome]} onChange={(e) => handleChangeFile(e, setProduto)} style={{ width: '24rem', cursor: 'pointer' }} />
                    </LabelCheck>
                ) : (
                    <FormInput key={index} type={pf.tipo} placeholder={pf.placeholder} name={pf.nome} value={pf.tipo !== 'file' ? (produto[pf.nome] ?? '') : undefined} onChange={(e) => handleChangeFile(e, setProduto)} multiple={pf.tipo === 'file'} />
                )
            ))}
            <CorTamanho cores={produto.produto_cor} setCores={(novas => handleChangeCor(novas, setProduto))} />
            <BtnDefault type='submit'>Editar Produto</BtnDefault>
        </Formulario>
    );
}
