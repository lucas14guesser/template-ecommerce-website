import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LinkDefault } from '../styles/GlobalStyles';

export default function BtnVoltar() {
    const navigate = useNavigate();

  return (
    <LinkDefault onClick={() => navigate(-1)}>Voltar</LinkDefault>
  )
}
