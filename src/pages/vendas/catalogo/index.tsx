import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Footer } from '../../../components/Footer';
import { Paginator } from '../../../components/Paginator';
import api from '../../../services/axios';
import { Container } from '../../../styles/pages/catalog';

const Catalog: NextPage = () => {
  const [year, setYear] = useState(1990);
  const [results, setResults] = useState([]);

  useEffect(() => {
    function getData() {
      api.get('/maquinas?populate[0]=images').then((res) => {
        setResults(res.data.data);
      });

      api.get('/pecas?populate[0]=images').then((res) => {
        const oldResult: any = [...results];
        res.data.data.map((piece: Piece) => {
          oldResult.push({
            ...piece,
            attributes: { model: piece.attributes.name, ...piece.attributes },
          });
        });

        setResults(oldResult);
      });
    }

    getData();
  }, []);

  const handleYearRange = (event: any) => {
    setYear(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const data = {
      category: form.category.value,
      brand: form.brand.value,
      direction: form.direction.value,
      state: form.state.value,
      model: form.model.value,
    };

    api
      .get(
        `/${data.category}?populate[0]=images&filters${
          data.brand && `[brand][$eq]=${data.brand}`
        }`
      )
      .then((res) => {
        const result: any = [];
        res.data.data.map((piece: Piece) => {
          result.push({
            ...piece,
            attributes: { model: piece.attributes.name, ...piece.attributes },
          });
        });
        setResults(result);
      });
  };

  return (
    <Container>
      <Head>
        <title>Viamaq - Tratores e Peças | Catálogo</title>
      </Head>

      <Paginator text='Venda | Catálogo' />

      <main>
        <section className='filter'>
          <h2>Filtrar por</h2>
          <form method='GET' onSubmit={handleSubmit}>
            <ul>
              <li>
                <h3>Categoria</h3>

                <div className='input'>
                  <input
                    type='radio'
                    name='category'
                    id='category'
                    value='maquinas'
                  />
                  <label htmlFor='category'>Máquinas</label>
                </div>
                <div className='input'>
                  <input
                    type='radio'
                    name='category'
                    id='category'
                    value='pecas'
                  />
                  <label htmlFor='category'>Peças</label>
                </div>
              </li>
              <li>
                <h3>Marca</h3>

                <div className='input'>
                  <input type='checkbox' name='brand' value='cat' />
                  <label htmlFor=''>Caterpillar</label>
                </div>
                <div className='input'>
                  <input type='checkbox' name='brand' value='john' />
                  <label htmlFor=''>John Deere</label>
                </div>
                <div className='input'>
                  <input type='checkbox' name='brand' value='case' />
                  <label htmlFor=''>Case</label>
                </div>
                <div className='input'>
                  <input type='checkbox' name='brand' value='case' />
                  <label htmlFor=''>Fiatallis</label>
                </div>
                <div className='input'>
                  <input type='checkbox' name='brand' value='case' />
                  <label htmlFor=''>Komatsu</label>
                </div>
                <div className='input'>
                  <input type='checkbox' name='brand' value='case' />
                  <label htmlFor=''>Valtra</label>
                </div>
                <div className='input'>
                  <input type='checkbox' name='brand' value='case' />
                  <label htmlFor=''>Massey Ferguson</label>
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
                    <option disabled selected value=''>
                      Selecione
                    </option>
                  </select>
                </div>
              </li>
              <li>
                <h3>Direção</h3>

                <div className='input'>
                  <select name='direction' id='direction'>
                    <option disabled selected value=''>
                      Selecione
                    </option>
                  </select>
                </div>
              </li>
              <li>
                <h3>Estado</h3>

                <div className='input'>
                  <select name='state' id='state'>
                    <option disabled selected value=''>
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
          {results.map((machine: Machine) => (
            <Link href={`/vendas/maquinas/${machine.id}`} key={machine.id}>
              <div className='item'>
                <img
                  src={machine.attributes.images.data[0].attributes.url}
                  alt={machine.attributes.model}
                />
                <h2>{machine.attributes.model}</h2>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </Container>
  );
};

export default Catalog;
