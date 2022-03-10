import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Paginator } from '../components/Paginator';
import { Container } from '../styles/pages/series';
import { Title } from '../styles/Title';

const Series: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Viamaq - Tratores e Peças | Série de Máquinas</title>
      </Head>

      <Paginator text='Série de Máquinas' />

      <main>
        <Title>Selecione a série abaixo para ver mais...</Title>

        <div className='seriesGrid'>
          <Link href='/vendas/catalogo' passHref>
            <a className='item'>
              <img src='/logos/case.png' alt='Logo Case' />
            </a>
          </Link>
          <Link href='/vendas/catalogo' passHref>
            <a className='item'>
              <img src='/logos/cat.png' alt='Logo Catterpilar' />
            </a>
          </Link>
          <Link href='/vendas/catalogo' passHref>
            <a className='item'>
              <img src='/logos/jcb.png' alt='Logo Case' />
            </a>
          </Link>
          <Link href='/vendas/catalogo' passHref>
            <a className='item'>
              <img src='/logos/clark.png' alt='Logo Case' />
            </a>
          </Link>
          <Link href='/vendas/catalogo' passHref>
            <a className='item'>
              <img src='/logos/fiatallis.png' alt='Logo Case' />
            </a>
          </Link>
          <Link href='/vendas/catalogo' passHref>
            <a className='item'>
              <img src='/logos/hyster.png' alt='Logo Case' />
            </a>
          </Link>
          <Link href='/vendas/catalogo' passHref>
            <a className='item'>
              <img src='/logos/john-deere.png' alt='Logo Case' />
            </a>
          </Link>
          <Link href='/vendas/catalogo' passHref>
            <a className='item'>
              <img src='/logos/komatisu.png' alt='Logo Case' />
            </a>
          </Link>
          <Link href='/vendas/catalogo' passHref>
            <a className='item'>
              <img src='/logos/michigan.png' alt='Logo Case' />
            </a>
          </Link>
          <Link href='/vendas/catalogo' passHref>
            <a className='item'>
              <img src='/logos/volvo.png' alt='Logo Case' />
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export default Series;
