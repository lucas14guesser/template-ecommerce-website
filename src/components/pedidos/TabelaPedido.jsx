import React, { useState } from 'react'
import { handleHiddenPedidos, listaPedidos } from './PedidosServices'
import { BtnDefault, FontPreco, IconesP, Table, TableWrapper, Td, Th, Thead, Title } from '../../styles/GlobalStyles';
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { ImgPedido } from './PedidosStyles';
import { BtnFilter } from '../produtos/ProdutosStyles';
import { precoFormat } from '../home/HomeServices';

export default function TabelaPedido() {
    const [hiddenPedido, setHiddenPedido] = useState(false);

    return (
        <>
            {listaPedidos.map((pedido, index) => (
                <div key={index} style={{ alignItems: 'flex-start' }}>
                    {hiddenPedido ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                            <Title>Pedido #{pedido.id}</Title>
                            <IconesP style={{ cursor: 'pointer' }}><FaRegArrowAltCircleDown onClick={() => handleHiddenPedidos(hiddenPedido, setHiddenPedido)} /></IconesP>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                            <Title>Pedido #{pedido.id}</Title>
                            <IconesP style={{ cursor: 'pointer' }}><FaRegArrowAltCircleRight onClick={() => handleHiddenPedidos(hiddenPedido, setHiddenPedido)} /></IconesP>
                        </div>
                    )}
                    {hiddenPedido && (
                        <>
                            {pedido.status === 'Finalizado' ? (
                                <TableWrapper>
                                    <Table>
                                        <Thead>
                                            <tr>
                                                <Th>Produto</Th>
                                                <Th>Foto</Th>
                                                <Th>Cor</Th>
                                                <Th>Tamanho</Th>
                                                <Th>Quantidade</Th>
                                                <Th>Preço</Th>
                                                <Th>Status</Th>
                                                <Th>Avaliação</Th>
                                            </tr>
                                        </Thead>
                                        <tbody>
                                            <tr>
                                                <Td><p>{pedido.produtos[0].nome}</p></Td>
                                                <Td><ImgPedido src={pedido.produtos[0].fotos[0].foto} /></Td>
                                                <Td><BtnFilter style={{ backgroundColor: pedido.produtos[0].cores[0].cor }}></BtnFilter></Td>
                                                <Td><p>{pedido.produtos[0].cores[0].tamanhos[0].tamanho}</p></Td>
                                                <Td><p>{pedido.quantidade}</p></Td>
                                                <Td><FontPreco>{`R$${precoFormat(pedido.produtos[0].preco)}`}</FontPreco></Td>
                                                <Td><p>{pedido.status}</p></Td>
                                                <Td><BtnDefault>Avaliar</BtnDefault></Td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </TableWrapper>
                            ) : (
                                <TableWrapper>
                                    <Table>
                                        <Thead>
                                            <tr>
                                                <Td>Produto</Td>
                                                <Td>Foto</Td>
                                                <Td>Cor</Td>
                                                <Td>Tamanho</Td>
                                                <Td>Quantidade</Td>
                                                <Td>Preço</Td>
                                                <Td>Status</Td>
                                            </tr>
                                        </Thead>
                                        <tbody>
                                            <tr>
                                                <Td><p>{pedido.produtos[0].nome}</p></Td>
                                                <Td><ImgPedido src={pedido.produtos[0].fotos[0].foto} /></Td>
                                                <Td><BtnFilter style={{ backgroundColor: pedido.produtos[0].cores[0].cor }}></BtnFilter></Td>
                                                <Td><p>{pedido.produtos[0].cores[0].tamanhos[0].tamanho}</p></Td>
                                                <Td><p>{pedido.quantidade}</p></Td>
                                                <Td><FontPreco>{`R$${precoFormat(pedido.produtos[0].preco)}`}</FontPreco></Td>
                                                <Td><p>{pedido.status}</p></Td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </TableWrapper>
                            )}
                        </>
                    )}
                </div>
            ))}
        </>
    )
}
