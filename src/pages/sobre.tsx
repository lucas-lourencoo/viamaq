import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Paginator } from '../components/Paginator';
import { Container } from '../styles/pages/about';
import { Title } from '../styles/Title';
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Viamaq - Tratores e Peças | Sobre</title>
      </Head>

      <Header />
      <Paginator text={'Sobre'} />

      <main className='centerText'>
        <article>
          <Title>Sobre nós</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            aliquam pellentesque integer sed lobortis et. Eu risus mattis
            scelerisque pulvinar. A, mattis imperdiet sagittis, nunc mollis
            luctus fusce ultricies viverra. orem ipsum dolor sit amet,
            consectetur adipiscing elit. Mattis aliquam pellentesque integer sed
            lobortis et. Eu risus mattis scelerisque pulvinar. A, mattis
            imperdiet sagittis, nunc mollis luctus fusce ultricies viverra.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            aliquam pellentesque integer sed lobortis et.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            aliquam pellentesque integer sed lobortis et. Eu risus mattis
            scelerisque pulvinar. A, mattis imperdiet sagittis, nunc mollis
            luctus fusce ultricies viverra. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mattis aliquam pellentesque integer sed
            lobortis et. Eu risus mattis scelerisque pulvinar.
          </p>
        </article>
        <img src='/about.png' alt='Trator sobre' />
      </main>
      <Footer />
    </Container>
  );
};

export default About;
