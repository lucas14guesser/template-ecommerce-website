import React, { useEffect } from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import CadastroForm from '../components/cadastro/CadastroForm'
import { useAuth } from '../components/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import BtnVoltar from '../services/BtnVoltar';

export default function Cadastro() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/minha-conta');
    }
  }, [user]);

  return (
    <Container>
      <BtnVoltar />
      <title>Cadastro</title>

      <Title>Área de Cadastro</Title>
      <CadastroForm />
      <div></div>
    </Container>
  )
}
