import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FaCalendar, FaTachometerAlt, FaTag, FaTractor } from 'react-icons/fa';
import Slider from 'react-slick';
import { Footer } from '../../../components/Footer';
import { Paginator } from '../../../components/Paginator';
import { Container } from '../../../styles/pages/single';
import { Title } from '../../../styles/Title';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface MachineProps {
  machine: Machine;
}

const Machine = ({ machine }: MachineProps) => {
  console.log(machine);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Head>
        <title>Viamaq - Tratores e Peças | ${machine?.attributes.model}</title>
      </Head>

      <Paginator text={`Venda | Máquinas | ${machine?.attributes.model}`} />

      <main>
        <section className='machineGrid'>
          <img
            src={
              'https://strapi-viamaq.herokuapp.com' +
              machine?.attributes?.images.data[0].attributes.url
            }
            alt=''
          />

          <section className='info'>
            <h1>
              <FaTractor /> {machine?.attributes.model}
            </h1>
            <span>Categoria: Compactadores combinados</span>
            <hr />
            <div className='fewInfos'>
              <span>
                <FaCalendar /> Ano de Fabricação: {machine?.attributes.year}
              </span>
              <span>
                <FaTachometerAlt /> Horímetro: {machine?.attributes.hourmeter}
              </span>
            </div>
            <p>{machine?.attributes.description}</p>
          </section>
        </section>

        <section className='destaques'>
          <Title>MÁQUINAS EM DESTAQUE</Title>
          <Slider {...settings}>
            <div className='card'>
              <img src='/maq1.png' alt='' />
              <div className='infos'>
                <h3>CDM 512D</h3>
                <p>
                  <FaTag color='var(--principal-darkness-2)' /> Compactadores
                  Combinados (CIL / PNEUS)
                </p>
                <p>
                  <FaTractor color='var(--principal-darkness-2)' /> LONKING
                  CDM512D
                </p>
                <p>
                  <FaCalendar color='var(--principal-darkness-2)' /> Ano de
                  Fabricação: 2012
                </p>
                <p>
                  <FaTachometerAlt color='var(--principal-darkness-2)' />
                  Horimetro: 0
                </p>
                <a href='#'>Ver Mais</a>
              </div>
            </div>
            <div className='card'>
              <img src='/maq2.png' alt='' />
              <div className='infos'>
                <h3>CDM 512D</h3>
                <p>
                  <FaTag color='var(--principal-darkness-2)' /> Compactadores
                  Combinados (CIL / PNEUS)
                </p>
                <p>
                  <FaTractor color='var(--principal-darkness-2)' /> LONKING
                  CDM512D
                </p>
                <p>
                  <FaCalendar color='var(--principal-darkness-2)' /> Ano de
                  Fabricação: 2012
                </p>
                <p>
                  <FaTachometerAlt color='var(--principal-darkness-2)' />
                  Horimetro: 0
                </p>
                <a href='#'>Ver Mais</a>
              </div>
            </div>
            <div className='card'>
              <img src='/maq3.png' alt='' />
              <div className='infos'>
                <h3>CDM 512D</h3>
                <p>
                  <FaTag color='var(--principal-darkness-2)' /> Compactadores
                  Combinados (CIL / PNEUS)
                </p>
                <p>
                  <FaTractor color='var(--principal-darkness-2)' /> LONKING
                  CDM512D
                </p>
                <p>
                  <FaCalendar color='var(--principal-darkness-2)' /> Ano de
                  Fabricação: 2012
                </p>
                <p>
                  <FaTachometerAlt color='var(--principal-darkness-2)' />
                  Horimetro: 0
                </p>
                <a href='#'>Ver Mais</a>
              </div>
            </div>
            <div className='card'>
              <img src='/maq1.png' alt='' />
              <div className='infos'>
                <h3>CDM 512D</h3>
                <p>
                  <FaTag color='var(--principal-darkness-2)' /> Compactadores
                  Combinados (CIL / PNEUS)
                </p>
                <p>
                  <FaTractor color='var(--principal-darkness-2)' /> LONKING
                  CDM512D
                </p>
                <p>
                  <FaCalendar color='var(--principal-darkness-2)' /> Ano de
                  Fabricação: 2012
                </p>
                <p>
                  <FaTachometerAlt color='var(--principal-darkness-2)' />
                  Horimetro: 0
                </p>
                <a href='#'>Ver Mais</a>
              </div>
            </div>
          </Slider>
        </section>
      </main>

      <Footer />
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    'https://strapi-viamaq.herokuapp.com/api/maquinas?populate[0]=images'
  );
  const machine = await res.json();

  const paths = machine.data.map((machine: Machine) => ({
    params: {
      id: machine.id.toString(),
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (paths) => {
  const res = await fetch(
    `https://strapi-viamaq.herokuapp.com/api/maquinas/${paths?.params?.id}?populate[0]=images`
  );
  const machine = (await res.json()) ?? null;

  return { props: { machine: machine.data } };
};

export default Machine;
