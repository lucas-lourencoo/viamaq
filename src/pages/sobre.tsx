import Head from 'next/head';
import { Footer } from '../components/Footer';
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

      <Paginator text={'Sobre'} />

      <main className='centerText'>
        <article>
          <Title>Sobre nós</Title>
          <p>
            A VIAMAQ TRATORES é uma empresa de especializada na compra e venda
            de máquinas pesadas para construção e tratores agrícolas, bem como
            de peças de reposição e serviços. Com sede em Campo Grande/MS,
            possui uma estrutura de preparação de máquinas e equipamentos e um
            departamento de vendas, que permitem atender seus clientes com
            eficiência e pontualidade tendo como outro diferencial uma equipe
            técnica e de vendas qualificada, sempre disposta suprir as
            necessidades do mercado de máquinas pesadas.
          </p>
          <p>
            A missão da VIAMAQ TRATORES é preencher uma lacuna existente no
            mercado de máquinas usadas, oferecendo o bom atendimento de uma
            equipe experiente aliada com um pensamento moderno e arrojado.
          </p>
        </article>
        <img src='/about.png' alt='Trator sobre' />
      </main>
      <Footer />
    </Container>
  );
};

export default About;
