import { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Paginator } from '../components/Paginator';
import { Container } from '../styles/pages/search';
import { Title } from '../styles/Title';

const Search: NextPage = () => {
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
              </select>
            </div>
            <div className='inputGroup'>
              <label htmlFor='state'>Estado</label>
              <select name='state' id='state' required>
                <option selected>Selecione</option>
              </select>
            </div>
            <div className='inputGroup'>
              <label htmlFor='transmission'>Transmissão</label>
              <select name='transmission' id='transmission' required>
                <option selected>Selecione</option>
              </select>
            </div>
            <div className='inputGroup'>
              <label htmlFor='fuel'>Combustível</label>
              <select name='fuel' id='fuel' required>
                <option selected>Selecione</option>
              </select>
            </div>
            <div className='inputGroup'>
              <label htmlFor='category'>Categoria</label>
              <select name='category' id='category' required>
                <option selected>Selecione</option>
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
