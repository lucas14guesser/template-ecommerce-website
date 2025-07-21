import React from 'react';
import { BtnDefault, DivFlexColm, DivFlexRow, InputModalWidht, SelectModalWidht, Title } from '../../styles/GlobalStyles';
import { adicionarCor, adicionarTamanho, handleCorChange, handleTamanhoChange, listCor, listTamanho, removerCor, removerTamanho } from './AdminServices';

export default function CorTamanho({ cores, setCores }) {
    return (
        <>
            <Title>Cores e Tamanhos</Title>
            {(cores || []).map((corObj, index) => (
                <DivFlexColm key={index}>
                    <DivFlexRow>
                        <SelectModalWidht value={corObj.cor.valor} onChange={(e) => handleCorChange(cores, setCores, index, e.target.value)}>
                            <option value="" disabled hidden>Cor</option>
                            {listCor.map((cor, indexC) => (
                                <option key={indexC} value={cor.valor}>{cor.nome}</option>
                            ))}
                        </SelectModalWidht>
                        <BtnDefault type="button" onClick={() => removerCor(cores, setCores, index)} style={{ width: '3rem' }}>-</BtnDefault>
                    </DivFlexRow>
                    {corObj.tamanhos.map((tam, indexJ) => (
                        <DivFlexRow key={indexJ}>
                            <SelectModalWidht name='list_tamanho' value={tam.tamanho} onChange={(e) => handleTamanhoChange(cores, setCores, index, indexJ, 'tamanho', e.target.value)}>
                                <option value="" disabled hidden>Tamanho</option>
                                {listTamanho.map((tamanho, indexT) => (
                                    <option key={indexT} value={tamanho.valor}>{tamanho.nome}</option>
                                ))}
                            </SelectModalWidht>
                            <InputModalWidht
                                type="number"
                                placeholder="Quantidade"
                                value={tam.quantidade}
                                onChange={(e) => handleTamanhoChange(cores, setCores, index, indexJ, 'quantidade', e.target.value)}
                            />
                            <BtnDefault type="button" onClick={() => removerTamanho(cores, setCores, index, indexJ)} style={{ width: '3rem' }}>–</BtnDefault>
                        </DivFlexRow>
                    ))}
                    <BtnDefault type="button" onClick={() => adicionarTamanho(cores, setCores, index)}>+ Tamanho</BtnDefault>
                </DivFlexColm>
            ))}
            <BtnDefault type="button" onClick={() => adicionarCor(cores, setCores)}>+ Cor</BtnDefault>
        </>
    );
}