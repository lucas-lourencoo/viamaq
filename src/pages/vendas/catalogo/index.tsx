import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Footer } from '../../../components/Footer';
import { Paginator } from '../../../components/Paginator';
import { Container } from '../../../styles/pages/catalog';
import api from '../../../services/axios';

const Catalog: NextPage = () => {
  const [year, setYear] = useState(1990);
  const [results, setResults] = useState([]);

  useEffect(() => {
    api.get('/produtos?populate[0]=images').then((res) => {
      setResults(res.data.data);
    });
  }, []);

  const handleYearRange = (event: any) => {
    setYear(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const data = {
      category: form.category.value,
      brandCat: form.brandCat.checked && form.brandCat.value,
      brandCase: form.brandCase.checked && form.brandCase.value,
      brandJonh: form.brandJonh.checked && form.brandJonh.value,
      brandFia: form.brandFia.checked && form.brandFia.value,
      brandKomatsu: form.brandKomatsu.checked && form.brandKomatsu.value,
      brandValtra: form.brandValtra.checked && form.brandValtra.value,
      brandMassey: form.brandMassey.checked && form.brandMassey.value,
      // direction: form.direction.value,
      // state: form.state.value,
      // model: form.model.value,
    };

    let query = `/produtos?populate[0]=images&filters[category][$eq]=${data.category}`;

    if (!!data.brandCat)
      query = query.concat(`&[brand][$eq]=${data.brandCat.toUpperCase()}`);
    if (!!data.brandCase)
      query = query.concat(`&[brand][$eq]=${data.brandCase.toLowerCase()}`);
    if (!!data.brandJonh)
      query = query.concat(`&[brand][$eq]=${data.brandJonh}`);
    if (!!data.brandFia) query = query.concat(`&[brand][$eq]=${data.brandFia}`);
    if (!!data.brandValtra)
      query = query.concat(`&[brand][$eq]=${data.brandValtra}`);
    if (!!data.brandMassey)
      query = query.concat(`&[brand][$eq]=${data.brandMassey}`);

    api.get(query).then(({ data }) => {
      setResults(data.data);
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
                    value='Máquinas'
                  />
                  <label htmlFor='category'>Máquinas</label>
                </div>
                <div className='input'>
                  <input
                    type='radio'
                    name='category'
                    id='category'
                    value='Peças'
                  />
                  <label htmlFor='category'>Peças</label>
                </div>
              </li>
              <li>
                <h3>Marca</h3>
                <div className='input'>
                  <input type='checkbox' name='brandCat' value='Caterpillar' />
                  <label htmlFor=''>Caterpillar</label>
                </div>
                <div className='input'>
                  <input type='checkbox' name='brandJonh' value='John Deere' />
                  <label htmlFor=''>John Deere</label>
                </div>
                <div className='input'>
                  <input type='checkbox' name='brandCase' value='Case' />
                  <label htmlFor=''>Case</label>
                </div>
                <div className='input'>
                  <input type='checkbox' name='brandFia' value='Fiatallis' />
                  <label htmlFor=''>Fiatallis</label>
                </div>
                <div className='input'>
                  <input type='checkbox' name='brandKomatsu' value='Komatsu' />
                  <label htmlFor=''>Komatsu</label>
                </div>
                <div className='input'>
                  <input type='checkbox' name='brandValtra' value='Valtra' />
                  <label htmlFor=''>Valtra</label>
                </div>
                <div className='input'>
                  <input
                    type='checkbox'
                    name='brandMassey'
                    value='Massey Ferguson'
                  />
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
              {/* <li>
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
              </li> */}
            </ul>
            <button>Filtrar</button>
          </form>
        </section>
        <section className='grid'>
          {results.map((product: Product) => (
            <Link href={`/vendas/produtos/${product.id}`} key={product.id}>
              <div className='item'>
                <img
                  src={product.attributes.images.data[0].attributes.url}
                  alt={product.attributes.name}
                />
                <h2>{product.attributes.name}</h2>
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
