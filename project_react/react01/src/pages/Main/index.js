import React from 'react';

import {FaGithubSquare, FaPlus, } from 'react-icons/fa'
import { Container , Form , SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
        <h1>
            <FaGithubSquare />
              Repositórios
        </h1>
        <Form onSubmit= {() => {}}>
            <input
            type="text"
            placeholder= "Adicionar repositório"
            />

            <SubmitButton disable>
              <FaPlus color="#fff" size={12} />
            </SubmitButton>
        </Form>
    </Container>
  );
}

