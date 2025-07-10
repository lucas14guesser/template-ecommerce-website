import React from 'react'
import { BtnDefault, Container, FontPreco, Subcontainer, Table, TableWrapper, Td, Th, Thead } from '../styles/GlobalStyles'
import { ImgPedido } from '../components/pedidos/PedidosStyles'
import { BtnFilter } from '../components/produtos/ProdutosStyles'
import { precoFormat } from '../components/home/HomeServices'
import { listaPedidos } from '../components/pedidos/PedidosServices'

export default function AdmPedidos() {
    return (
        <Container>
            <Subcontainer>
                {listaPedidos.map((pedido, index) => (
                    <TableWrapper key={index}>
                        <Table>
                            <Thead>
                                <tr>
                                    <Th>Pedido</Th>
                                    <Th>Cliente</Th>
                                    <Th>Produto</Th>
                                    <Th>Foto</Th>
                                    <Th>Cor</Th>
                                    <Th>Tamanho</Th>
                                    <Th>Quantidade</Th>
                                    <Th>Preço</Th>
                                    <Th>Status</Th>
                                </tr>
                            </Thead>
                            <tbody>
                                <tr>
                                    <Td><p>{pedido.id}</p></Td>
                                    <Td><p>{pedido.user}</p></Td>
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
                ))}
            </Subcontainer>

        </Container>
    )
}
