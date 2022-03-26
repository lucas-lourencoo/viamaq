import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Footer } from '../../../components/Footer';
import { Paginator } from '../../../components/Paginator';
import { Title } from '../../../styles/Title';
import { Container } from '../../../styles/pages/single';
import {
  FaCalendar,
  FaCogs,
  FaTachometerAlt,
  FaTag,
  FaTractor,
} from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface PieceProps {
  piece: Piece;
}

const Piece = ({ piece }: PieceProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  return (
    <Container>
      <Head>
        <title>Viamaq - Tratores e Peças | ${piece?.attributes.name}</title>
      </Head>

      <Paginator text={`Venda | Peças | ${piece?.attributes.name}`} />

      <main>
        <section className='machineGrid'>
          <img src={piece?.attributes?.images.data[0].attributes.url} alt='' />
          <section className='info'>
            <h1>
              <FaCogs /> {piece?.attributes.name}
            </h1>
            <span>Categoria:{piece?.attributes.machine_model}</span>
            <hr />
            <div className='fewInfos'>
              <span>
                <FaCalendar /> Ano de Fabricação: 2012
              </span>
              <span>
                <FaTachometerAlt /> Horímetro: 0
              </span>
            </div>
            <p>{piece?.attributes.description}</p>
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
    'https://strapi-viamaq.herokuapp.com/api/pecas?populate[0]=images'
  );
  const { data } = await res.json();

  const paths = data.map((piece: Piece) => ({
    params: {
      id: piece.id.toString(),
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://strapi-viamaq.herokuapp.com/api/pecas/${params?.id}?populate[0]=images`
  );
  const { data } = (await res.json()) ?? null;

  return { props: { piece: data } };
};

export default Piece;
