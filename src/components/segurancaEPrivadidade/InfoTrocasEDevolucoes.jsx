import React from 'react'
import { Subcontainer, Title, TopicFont } from '../../styles/GlobalStyles'
import { infosTrocaDev } from './SegurancaEPrivacidadeServices'

export default function InfoTrocasEDevolucoes() {
  return (
      <Subcontainer>
        <Title>Informações</Title>
        <div>
          <ol>
            {infosTrocaDev.map((infos, index) => (
              <li key={index}>
                <TopicFont>{infos.topic}</TopicFont>
                <p>{infos.info}</p>
              </li>
            ))}
          </ol>
        </div>
      </Subcontainer>
  )
}
