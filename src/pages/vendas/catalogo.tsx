import axios from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Paginator } from '../../components/Paginator';
import { Container } from '../../styles/pages/catalog';

const Catalog: NextPage = () => {
  const [year, setYear] = useState(1990);
  const [machines, setMachines] = useState([]);
  const [pieces, setPieces] = useState([]);

  const instance = axios.create({
    baseURL: 'https://viamaq.vercel.app/api',
  });

  useEffect(() => {
    instance.get('/catalog').then((res) => {
      setMachines(res.data.machines);
      setPieces(res.data.pieces);
    });
  }, []);

  const handleYearRange = (event: any) => {
    setYear(event.target.value);
  };

  return (
    <Container>
      <Head>
        <title>Viamaq - Tratores e Peças | Catálogo</title>
      </Head>
      <Header />
      <Paginator text='Venda | Catálogo' />

      <main>
        <section className='filter'>
          <h2>Filtrar por</h2>
          <form action='' method='POST'>
            <ul>
              <li>
                <h3>Categoria</h3>

                <div className='input'>
                  <input type='radio' name='category' value='machines' />
                  <label htmlFor=''>Máquinas</label>
                </div>
                <div className='input'>
                  <input type='radio' name='category' value='pieces' />
                  <label htmlFor=''>Peças</label>
                </div>
              </li>
              <li>
                <h3>Marca</h3>

                <div className='input'>
                  <input type='checkbox' name='category' value='cat' />
                  <label htmlFor=''>Caterpillar</label>
                </div>
                <div className='input'>
                  <input type='checkbox' name='category' value='john' />
                  <label htmlFor=''>John Deere</label>
                </div>
                <div className='input'>
                  <input type='checkbox' name='category' value='case' />
                  <label htmlFor=''>Case</label>
                </div>
              </li>
              <li>
                <h3>Valor</h3>

                <div className='input'>
                  <input type='range' name='value' list='tickmarks' />
                  <datalist id='tickmarks'>
                    <option value='0' label='0%' />
                    <option value='10' />
                    <option value='20' />
                    <option value='30' />
                    <option value='40' />
                    <option value='50' label='50%' />
                    <option value='60' />
                    <option value='70' />
                    <option value='80' />
                    <option value='90' />
                    <option value='100' label='100%' />
                  </datalist>
                </div>
              </li>
              <li>
                <h3>Ano</h3>

                <div className='inputRange'>
                  <input
                    type='range'
                    name='year'
                    list='tickmarks'
                    min='1990'
                    max='2021'
                    onChange={handleYearRange}
                    id='year'
                  />
                  <label htmlFor='year'>Ano: 1990 - {year}</label>
                </div>
              </li>
              <li>
                <h3>Modelo</h3>

                <div className='input'>
                  <select name='model' id='model'>
                    <option disabled selected>
                      Selecione
                    </option>
                  </select>
                </div>
              </li>
              <li>
                <h3>Direção</h3>

                <div className='input'>
                  <select name='direction' id='direction'>
                    <option disabled selected>
                      Selecione
                    </option>
                  </select>
                </div>
              </li>
              <li>
                <h3>Estado</h3>

                <div className='input'>
                  <select name='state' id='state'>
                    <option disabled selected>
                      Selecione
                    </option>
                  </select>
                </div>
              </li>
            </ul>
            <button>Filtrar</button>
          </form>
        </section>
        <section className='grid'>
          {machines.map((machine: MachineInterface) => (
            <div className='item' key={machine.id}>
              <img src={machine.image} alt='' />
              <h2>{machine.model}</h2>
            </div>
          ))}
          {pieces.map((piece: PieceInterface) => (
            <div className='item' key={piece.id}>
              <figure>
                <img src={piece.image} alt='' />
              </figure>
              <h2>
                {piece.name} - {piece.machine_model}
              </h2>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </Container>
  );
};

export default Catalog;
