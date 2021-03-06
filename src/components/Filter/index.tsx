import { useRouter } from 'next/router';
import { useState } from 'react';
import api from '../../services/axios';
import { FilterContainer } from './styles';

interface FilterProps {
  setResults: ([]) => void;
}

export default function Filter({ setResults }: FilterProps) {
  const [year, setYear] = useState(2021);
  const [value, setValue] = useState(300000);
  const router = useRouter();

  const handleYearRange = (event: any) => {
    setYear(event.target.value);
  };

  const handleValue = (event: any) => {
    setValue(event.target.value);
  };

  const changeCategory = (event: any) => {
    router.push({
      pathname: '/vendas/catalogo',
      query: {
        category: event.target.value,
      },
    });
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

    let query = `/produtos?populate=%2A&filters[category][$eq]=${router.query.category}`;

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

    query = query.concat(`&[value][$lte]=${value}&[year][$lte]=${year}`);

    api.get(query).then(({ data }) => {
      setResults(data.data);
    });
  };

  return (
    <FilterContainer>
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
                value='M??quinas'
                onChange={changeCategory}
              />
              <label htmlFor='category'>M??quinas</label>
            </div>
            <div className='input'>
              <input
                type='radio'
                name='category'
                id='category'
                value='Pe??as'
                onChange={changeCategory}
              />
              <label htmlFor='category'>Pe??as</label>
            </div>
            <div className='input'>
              <input
                type='radio'
                name='category'
                id='category'
                value='Caminh??o'
                onChange={changeCategory}
              />
              <label htmlFor='category'>Caminh??o</label>
            </div>
            <div className='input'>
              <input
                type='radio'
                name='category'
                id='category'
                value='Implementos'
                onChange={changeCategory}
              />
              <label htmlFor='category'>Implementos</label>
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

            <div className='inputRange'>
              <input
                type='range'
                name='value'
                defaultValue={value}
                onChange={handleValue}
                min='0'
                max={300000}
                step={10000}
              />
              <label htmlFor='value'>
                Valor:{' < '}
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(value)}
              </label>
            </div>
          </li>
          <li>
            <h3>Ano</h3>

            <div className='inputRange'>
              <input
                type='range'
                name='year'
                min='1990'
                max='2021'
                onChange={handleYearRange}
                id='year'
                defaultValue={year}
              />
              <label htmlFor='year'>Ano: 1990 - {year}</label>
            </div>
          </li>
        </ul>
        <button>Filtrar</button>
      </form>
    </FilterContainer>
  );
}
