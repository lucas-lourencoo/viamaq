import Link from 'next/link';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Container } from '../styles/pages';
import { Title } from '../styles/Title';
import { Footer } from '../components/Footer';
import Slider from 'react-slick';
import { FiArrowRight } from 'react-icons/fi';
import { FaTag, FaTractor, FaCalendar, FaTachometerAlt } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface HomeProps {
  pieces: Piece[];
  machines: Machine[];
}

const Home = ({ machines, pieces }: HomeProps) => {
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

  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };

  const settings3 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
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
          centerMode: true,
          centerPadding: '30px',
        },
      },
    ],
  };

  return (
    <Container>
      <Head>
        <title>Viamaq - Tratores e Peças | Início</title>
      </Head>

      <main>
        <div className='banner'>
          <div className='text'>
            <h1>Máquinas, Tratores & Equipamentos</h1>
            <hr />
            <h2>
              Todos com <span>qualidade</span> e <span>procedência</span>!
            </h2>

            <Link href='/vendas/catalogo'>
              <a>
                Conferir catálogo <FiArrowRight strokeWidth={3} size={30} />
              </a>
            </Link>
          </div>
        </div>

        <div className='destaques'>
          <Title>MÁQUINAS EM DESTAQUE</Title>
          <Slider {...settings}>
            {machines.map((machine: Machine, index: number) => (
              <div className='card' key={index}>
                <figure>
                  <img
                    src={machine.attributes.images.data[0].attributes.url}
                    alt=''
                  />
                </figure>

                <div className='infos'>
                  <h3>{machine.attributes.model}</h3>
                  <p>
                    <FaTag color='var(--principal-darkness-2)' /> Compactadores
                    Combinados (CIL / PNEUS)
                  </p>
                  <p>
                    <FaTractor color='var(--principal-darkness-2)' />
                    {machine.attributes.brand}
                  </p>
                  <p>
                    <FaCalendar color='var(--principal-darkness-2)' /> Ano de
                    Fabricação: {machine.attributes.year}
                  </p>
                  <p>
                    <FaTachometerAlt color='var(--principal-darkness-2)' />
                    Horimetro: {machine.attributes.hourmeter}
                  </p>
                  <Link href={`/vendas/maquinas/${machine.id}`} passHref>
                    <a href=''>Ver Mais</a>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className='partnersLine'>
          <Slider {...settings2}>
            <a href=''>
              <img src='/logos/case.png' alt='Logo Case' />
            </a>
            <a href=''>
              <img src='/logos/komatisu.png' alt='Logo Komatisu' />
            </a>
            <a href=''>
              <img src='/logos/john-deere.png' alt='Logo John Deere' />
            </a>
            <a href=''>
              <img src='/logos/jcb.png' alt='Logo JCB' />
            </a>
            <a href=''>
              <img src='/logos/cat.png' alt='Logo Caterpillar' />
            </a>
            <a href=''>
              <img src='/logos/clark.png' alt='Logo Clark' />
            </a>
            <a href=''>
              <img src='/logos/hyster.png' alt='Logo Hyster' />
            </a>
            <a href=''>
              <img src='/logos/volvo.png' alt='Logo Volvo' />
            </a>
            <a href=''>
              <img src='/logos/michigan.png' alt='Logo Michigan' />
            </a>
            <a href=''>
              <img src='/logos/fiatallis.png' alt='Logo fiatallis' />
            </a>
          </Slider>
        </div>

        <div className='destaquesPieces'>
          <Title>Peças EM DESTAQUE</Title>
          <Slider {...settings3}>
            {pieces.map((piece: Piece, index: number) => (
              <div className='card' key={index}>
                <figure>
                  <img
                    src={piece.attributes.images.data[0].attributes.url}
                    alt={piece.attributes.name}
                  />
                </figure>
                <div className='infos'>
                  <h3>
                    {piece.attributes.name} - {piece.attributes.machine_model}
                  </h3>
                  <p>
                    <FaTag color='var(--principal-darkness-2)' size={20} />
                    {piece.attributes.brand.toUpperCase()}
                  </p>
                  <Link href={`/vendas/pecas/${piece.id}`}>Ver Mais</Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.7985937852227!2d-54.5951157850774!3d-20.43236778632444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e8669d75fd37%3A0x9dc163c9b0aa0562!2sAv.%20Cel.%20Antonino%2C%205153%20-%20Cel.%20Antonino%2C%20Campo%20Grande%20-%20MS%2C%2079013-000!5e0!3m2!1spt-BR!2sbr!4v1639076279172!5m2!1spt-BR!2sbr'
          width='600'
          height='450'
          allowFullScreen
          loading='lazy'
        ></iframe>
      </main>

      <Footer />
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const machinesResponse = await fetch(
    'https://strapi-viamaq.herokuapp.com/api/maquinas?populate[0]=images'
  );
  const piecesResponse = await fetch(
    'https://strapi-viamaq.herokuapp.com/api/pecas?populate[0]=images'
  );

  const machines = await machinesResponse.json();
  const pieces = await piecesResponse.json();

  return {
    props: {
      machines: machines.data,
      pieces: pieces.data,
    },
  };
};
