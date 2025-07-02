import React from 'react'
import { Subcontainer, Title, TopicFont } from '../../styles/GlobalStyles'
import { infosPergFreq } from './SegurancaEPrivacidadeServices'

export default function InfoPerguntasFrequentes() {
  return (
      <Subcontainer>
        <Title>Informações</Title>
        <div>
          <ol>
            {infosPergFreq.map((infos, index) => (
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
