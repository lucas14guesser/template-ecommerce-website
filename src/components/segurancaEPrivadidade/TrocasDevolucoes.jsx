import React from 'react'
import { Container, Subcontainer, Title } from '../../styles/GlobalStyles'
import { infosTrocaDev } from './SegurancaEPrivacidadeServices'

export default function TrocasDevolucoes() {
  return (
    <Container>
      <Subcontainer>
        <title>Trocas e Devoluções</title>
        <Title>Trocas e Devoluções</Title>

        <div>
          <ol>
            {infosTrocaDev.map((infos, index) => (
              <li key={index}>
                <h4>{infos.topic}</h4>
                <p>{infos.info}</p>
              </li>
            ))}
          </ol>
        </div>
      </Subcontainer>
    </Container>
  )
}
