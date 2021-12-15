import { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Paginator } from '../components/Paginator';
import { Container } from '../styles/pages/series';
import { Title } from '../styles/Title';

const Series: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Viamaq - Tratores e Peças | Série de Máquinas</title>
      </Head>

      <Header />
      <Paginator text='Série de Máquinas' />

      <main>
        <Title>Selecione a série abaixo para ver mais...</Title>

        <div className='seriesGrid'>
          <a className='item' href='#'>
            <img src='/logos/case.png' alt='Logo Case' />
          </a>
          <a className='item' href='#'>
            <img src='/logos/cat.png' alt='Logo Catterpilar' />
          </a>
          <a className='item' href='#'>
            <img src='/logos/jcb.png' alt='Logo Case' />
          </a>
          <a className='item' href='#'>
            <img src='/logos/clark.png' alt='Logo Case' />
          </a>
          <a className='item' href='#'>
            <img src='/logos/fiatallis.png' alt='Logo Case' />
          </a>
          <a className='item' href='#'>
            <img src='/logos/hyster.png' alt='Logo Case' />
          </a>
          <a className='item' href='#'>
            <img src='/logos/john-deere.png' alt='Logo Case' />
          </a>
          <a className='item' href='#'>
            <img src='/logos/komatisu.png' alt='Logo Case' />
          </a>
          <a className='item' href='#'>
            <img src='/logos/michigan.png' alt='Logo Case' />
          </a>
          <a className='item' href='#'>
            <img src='/logos/volvo.png' alt='Logo Case' />
          </a>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export default Series;
