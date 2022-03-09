import axios from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Paginator } from '../components/Paginator';
import api from '../services/axios';
import { Container } from '../styles/pages/search';
import { Title } from '../styles/Title';

const Search: NextPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get('/categories').then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Head>
        <title>Viamaq - Tratores e Peças | Buscar máquinas</title>
      </Head>
      <Header />
      <Paginator text='Buscar máquinas' />

      <main>
        <Title>Buscar máquinas</Title>

        <form action='' method='POST' onSubmit={handleSubmit}>
          <div className='grid'>
            <div className='inputGroup'>
              <label htmlFor='name'>Nome</label>
              <input type='text' name='name' id='name' required />
            </div>
            <div className='inputGroup'>
              <label htmlFor='manufacturer'>Fabricante</label>
              <select name='manufacturer' id='manufacturer' required>
                <option selected>Selecione</option>
              </select>
            </div>
            <div className='inputGroup'>
              <label htmlFor='direction'>Direção</label>
              <select name='direction' id='direction' required>
                <option selected>Selecione</option>
                <option value='Hidráulica'>Hidráulica</option>
                <option value='Comum'>Comum</option>
              </select>
            </div>
            <div className='inputGroup'>
              <label htmlFor='state'>Estado</label>
              <select name='state' id='state' required>
                <option selected>Selecione</option>
                <option value='Nova'>Nova</option>
                <option value='Usado'>Usado</option>
              </select>
            </div>
            <div className='inputGroup'>
              <label htmlFor='transmission'>Transmissão</label>
              <select name='transmission' id='transmission' required>
                <option selected>Selecione</option>
                <option value='Manual'>Manual</option>
                <option value='Automático'>Automático</option>
              </select>
            </div>
            <div className='inputGroup'>
              <label htmlFor='fuel'>Combustível</label>
              <select name='fuel' id='fuel' required>
                <option selected>Selecione</option>
                <option value='Diesel'>Diesel</option>
                <option value='GLT'>GLT</option>
                <option value='Gasolina'>Gasolina</option>
              </select>
            </div>
            <div className='inputGroup'>
              <label htmlFor='category'>Categoria</label>
              <select name='category' id='category' required>
                <option selected>Selecione</option>
                {categories.map((category: CategoryInterface) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button type='submit'>Buscar</button>
        </form>
      </main>
      <Footer />
    </Container>
  );
};

export default Search;
