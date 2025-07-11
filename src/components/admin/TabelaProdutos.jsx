import React from 'react'
import { categoriasProdutos } from '../produtos/ProdutosServices'
import { FontPreco, Table, TableWrapper, Td, Th, Thead } from '../../styles/GlobalStyles'
import { ImgPedido } from '../pedidos/PedidosStyles'
import { precoFormat } from '../home/HomeServices'
import { BtnFilter } from '../produtos/ProdutosStyles'

export default function TabelaProdutos() {
    return (
        <TableWrapper>
            <Table>
                <Thead>
                    <tr>
                        <Th>Categoria</Th>
                        <Th>Produto</Th>
                        <Th>Foto</Th>
                        <Th>Preço</Th>
                        <Th>Cor</Th>
                        <Th>Tamanho</Th>
                        <Th>Quantidade</Th>
                        <Th>Lançamento</Th>
                        <Th>Oferta</Th>
                    </tr>
                </Thead>
                {categoriasProdutos.map((prod, index) => (
                    <tbody key={index}>
                        <tr>
                            <Td><p>{prod.categoria}</p></Td>
                            <Td><p>{prod.produtos[0].nome}</p></Td>
                            <Td><ImgPedido src={prod.produtos[0].fotos[0].foto} /></Td>
                            <Td><FontPreco>{`R$${precoFormat(prod.produtos[0].preco)}`}</FontPreco></Td>
                            <Td><BtnFilter style={{ backgroundColor: prod.produtos[0].cores[0].cor }}></BtnFilter></Td>
                            <Td><p>{prod.produtos[0].cores[0].tamanhos[0].tamanho}</p></Td>
                            <Td><p>{prod.produtos[0].cores[0].tamanhos[0].quantidade}</p></Td>
                            <Td><p>{prod.produtos[0].lancamento}</p></Td>
                            <Td><p>{prod.produtos[0].ofertas}</p></Td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </TableWrapper>
    )
}
