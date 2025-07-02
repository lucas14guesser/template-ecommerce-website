import React from 'react'
import { Subcontainer, Title, TopicFont } from '../../styles/GlobalStyles'
import { infosPolitPriv } from './SegurancaEPrivacidadeServices'

export default function InfoPoliticaPrivacidade() {
  return (
      <Subcontainer>
        <Title>Informações</Title>
        <div>
          <ol>
            {infosPolitPriv.map((infos, index) => (
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
