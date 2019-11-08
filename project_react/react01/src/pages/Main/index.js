import React, { Component} from 'react';
import {FaGithubSquare, FaPlus, FaSpinner } from 'react-icons/fa'

import api from '../../services/api';

import { Container , Form , SubmitButton, List } from './styles';

export default class Main extends Component{

    state = {
        newRepo: '',
        repositories: [],
        loading: false,
    }

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    }
    handleOnSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true });

        const { newRepo, repositories } = this.state;
        const response = await api.get(`/repos/${newRepo}`);

        const data = {
            name: response.data.full_name,
        }
        this.setState({
            repositories: [...repositories, data],
            newRepo: '',
            loading: false,
        })
    }

    render(){
      const  { newRepo, repositories, loading } =  this.state;
    return (
        <Container>
            <h1>
                <FaGithubSquare />
                  Repositórios
            </h1>
            <Form onSubmit= {this.handleOnSubmit}>
                <input
                type="text"
                placeholder= "Adicionar repositório"
                value = {newRepo}
                onChange={this.handleInputChange}
                />

                <SubmitButton loading={loading}>
                {loading ? (<FaSpinner color="#fff" size={14} />) :
                ( <FaPlus color="#fff" size={12} /> )}

                </SubmitButton>
            </Form>
            <List>
                {repositories.map(repositories => (
                    <li key={repositories.name}>
                        <span>{repositories.name}</span>
                        <a ref="">Detalhes</a>
                    </li>
                ))}
            </List>
        </Container>
      );
  }
}

