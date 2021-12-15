import { NextPage } from 'next';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Paginator } from '../../components/Paginator';
import { Container } from '../../styles/pages/catalog';

const Catalog: NextPage = () => {
  return (
    <Container>
      <Header />
      <Paginator text='Venda | Catálogo' />

      <main>
        <section className='filter'></section>
        <section className='grid'>
          <div className='item'>
            <img src='/pec1.png' alt='' />
            <h2>Coroa e Cubo 70ci</h2>
          </div>
          <div className='item'>
            <img src='/pec1.png' alt='' />
            <h2>Coroa e Cubo 70ci</h2>
          </div>
          <div className='item'>
            <img src='/pec1.png' alt='' />
            <h2>Coroa e Cubo 70ci</h2>
          </div>
          <div className='item'>
            <img src='/pec1.png' alt='' />
            <h2>Coroa e Cubo 70ci</h2>
          </div>
          <div className='item'>
            <img src='/pec1.png' alt='' />
            <h2>Coroa e Cubo 70ci</h2>
          </div>
          <div className='item'>
            <img src='/pec1.png' alt='' />
            <h2>Coroa e Cubo 70ci</h2>
          </div>
          <div className='item'>
            <img src='/pec1.png' alt='' />
            <h2>Coroa e Cubo 70ci</h2>
          </div>
          <div className='item'>
            <img src='/pec1.png' alt='' />
            <h2>Coroa e Cubo 70ci</h2>
          </div>
          <div className='item'>
            <img src='/pec1.png' alt='' />
            <h2>Coroa e Cubo 70ci</h2>
          </div>
        </section>
      </main>
      <Footer />
    </Container>
  );
};

export default Catalog;
