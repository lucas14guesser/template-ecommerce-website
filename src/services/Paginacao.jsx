import React from 'react'
import { BotaoPaginacao, WrapperPaginacao } from '../styles/GlobalStyles'

export default function Paginacao({ paginaAtual, totalPaginas, onAnterior, onProxima }) {
  return (
    <WrapperPaginacao>
        <BotaoPaginacao onClick={onAnterior} disabled={paginaAtual === 1}>
            Anterior
        </BotaoPaginacao>
        <span>Página {paginaAtual} de {totalPaginas}</span>
        <BotaoPaginacao onClick={onProxima} disabled={paginaAtual === totalPaginas}>
            Próxima
        </BotaoPaginacao>
    </WrapperPaginacao>
  )
}
