import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Slider from 'react-slick';
import { Container } from '../styles/pages';
import { Title } from '../styles/Title';
import { Footer } from '../components/Footer';
import { FiArrowRight } from 'react-icons/fi';
import { FaTag, FaTractor, FaCalendar, FaTachometerAlt } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
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
  dots: true,
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

const Home = () => {
  const [machines, setMachines] = useState([] as Product[]);
  const [pieces, setPieces] = useState([] as Product[]);

  async function getData() {
    const response = await fetch(
      'https://strapi-viamaq.herokuapp.com/api/produtos?populate=%2A'
    );

    const { data } = await response.json();

    const machines = await data.filter(
      (product: Product) =>
        product.attributes.category === 'Máquinas' && product
    );

    const pieces = await data.filter(
      (product: Product) => product.attributes.category === 'Peças' && product
    );

    setMachines(machines);
    setPieces(pieces);
  }

  useEffect(() => {
    getData();
  }, []);

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
            {machines.map((machine: Product, index: number) => {
              if (index <= 3)
                return (
                  <div className='card' key={index}>
                    <figure>
                      <img
                        src={machine.attributes.images.data[0].attributes.url}
                        alt=''
                      />
                    </figure>

                    <div className='infos'>
                      <h3>{machine.attributes.name}</h3>
                      <p>
                        <FaTractor color='var(--principal-darkness-2)' />
                        {machine.attributes.brand}
                      </p>
                      <p>
                        <FaCalendar color='var(--principal-darkness-2)' /> Ano
                        de Fabricação: {machine.attributes.year}
                      </p>
                      <p>
                        <FaTachometerAlt color='var(--principal-darkness-2)' />
                        Horimetro: {machine.attributes.hourmeter}
                      </p>
                      <Link href={`/vendas/produtos/${machine.id}`} passHref>
                        <a href=''>Ver Mais</a>
                      </Link>
                    </div>
                  </div>
                );
            })}
          </Slider>
          <Slider {...settings}>
            {machines.map((machine: Product, index: number) => {
              if (index > 3)
                return (
                  <div className='card' key={index}>
                    <figure>
                      <img
                        src={machine.attributes.images.data[0].attributes.url}
                        alt=''
                      />
                    </figure>

                    <div className='infos'>
                      <h3>{machine.attributes.name}</h3>
                      <p>
                        <FaTractor color='var(--principal-darkness-2)' />
                        {machine.attributes.brand}
                      </p>
                      <p>
                        <FaCalendar color='var(--principal-darkness-2)' /> Ano
                        de Fabricação: {machine.attributes.year}
                      </p>
                      <p>
                        <FaTachometerAlt color='var(--principal-darkness-2)' />
                        Horimetro: {machine.attributes.hourmeter}
                      </p>
                      <Link href={`/vendas/produtos/${machine.id}`} passHref>
                        <a href=''>Ver Mais</a>
                      </Link>
                    </div>
                  </div>
                );
            })}
          </Slider>
        </div>

        <div className='partnersLine'>
          <Slider {...settings2}>
            <a href='https://www.casece.com/latam/pt-br' target='__blank'>
              <img src='/logos/case.png' alt='Logo Case' />
            </a>
            <a href='https://www.komatsu.com.br/source/' target='__blank'>
              <img src='/logos/komatisu.png' alt='Logo Komatisu' />
            </a>
            <a href='https://www.deere.com.br/pt/index.html' target='__blank'>
              <img src='/logos/john-deere.png' alt='Logo John Deere' />
            </a>
            <a href='https://www.jcb.com/pt-br' target='__blank'>
              <img src='/logos/jcb.png' alt='Logo JCB' />
            </a>
            <a href='https://www.caterpillar.com/pt.html' target='__blank'>
              <img src='/logos/cat.png' alt='Logo Caterpillar' />
            </a>
            <a href='https://clarkempilhadeiras.com.br/' target='__blank'>
              <img src='/logos/clark.png' alt='Logo Clark' />
            </a>
            <a href='https://www.hyster.com/pt-br/brazil/' target='__blank'>
              <img src='/logos/hyster.png' alt='Logo Hyster' />
            </a>
            <a href='https://www.volvoce.com/brasil/pt-br/' target='__blank'>
              <img src='/logos/volvo.png' alt='Logo Volvo' />
            </a>
            <a href='' target='__blank'>
              <img src='/logos/michigan.png' alt='Logo Michigan' />
            </a>
            <a href='' target='__blank'>
              <img src='/logos/fiatallis.png' alt='Logo fiatallis' />
            </a>
          </Slider>
        </div>

        <div className='destaquesPieces'>
          <Title>Peças EM DESTAQUE</Title>
          <Slider {...settings3}>
            {pieces.map((piece: Product, index: number) => (
              <div className='card' key={index}>
                <figure>
                  <img
                    src={piece.attributes.images.data[0].attributes.url}
                    alt={piece.attributes.name}
                  />
                </figure>
                <div className='infos'>
                  <h3>{piece.attributes.name}</h3>
                  <p>
                    <FaTag color='var(--principal-darkness-2)' size={20} />
                    {piece.attributes.brand.toUpperCase()}
                  </p>
                  <Link href={`/vendas/produtos/${piece.id}`}>Ver Mais</Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.465115445441!2d-54.570982685141836!3d-20.40493238633955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e83254562943%3A0xea2c5fb98bcd85e5!2sAv.%20Cel.%20Antonino%2C%205857%20-%20Coronel%20Antonino%2C%20Campo%20Grande%20-%20MS%2C%2079062-200!5e0!3m2!1spt-BR!2sbr!4v1654808879718!5m2!1spt-BR!2sbr'
          width='600'
          height='450'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Locale Map'
        ></iframe>
      </main>

      <Footer />
    </Container>
  );
};

export default Home;
