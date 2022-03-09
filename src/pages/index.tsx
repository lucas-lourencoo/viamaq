import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Container } from '../styles/pages';
import { Title } from '../styles/Title';
import { Footer } from '../components/Footer';
import Slider from 'react-slick';
import { FiArrowRight } from 'react-icons/fi';
import { FaTag, FaTractor, FaCalendar, FaTachometerAlt } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import api from '../services/axios';

const Home = () => {
  const [machines, setMachines] = useState([]);
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    async function getData() {
      await api.get('/machines/destaques').then((res) => {
        setMachines(res.data);
      });
      await api.get('/pieces/destaques').then((res) => setPieces(res.data));
    }

    getData();
  }, []);

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
  };

  return (
    <Container>
      <Head>
        <title>Viamaq - Tratores e Peças | Início</title>
      </Head>

      <Header />
      <main>
        <div className='banner'>
          <div className='text'>
            <h1>Máquinas, Tratores & Equipamentos</h1>
            <hr />
            <h2>
              Todos com <span>qualidade</span> e <span>garantia</span>!
            </h2>

            <Link href='/vendas/catalogo'>
              <a>
                Conferir catálogo <FiArrowRight strokeWidth={3} size={30} />
              </a>
            </Link>
          </div>
        </div>

        <div className='about'>
          <img src='/trator.png' alt='' />

          <div className='text'>
            <Title>
              excelência em equipamentos <span> pesados</span>!
            </Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel sollicitudin tortor, sit amet facilisis tortor. Cras rhoncus
              feugiat lorem ut semper. Nulla mi augue, finibus nec aliquet non,
              sollicitudin gravida dui. Aliquam volutpat felis sit amet nisi
              ultrices, vitae porta dui rhoncus.
            </p>
            <p>
              Sed mauris mi, commodo non massa vel, molestie porta elit. Vivamus
              auctor tincidunt ipsum nec eleifend. Quisque urna lectus,
              malesuada non urna quis, tempor pulvinar orci. Morbi auctor dolor
              in aliquam commodo.
            </p>
          </div>
        </div>

        <div className='destaques'>
          <Title>MÁQUINAS EM DESTAQUE</Title>
          <Slider {...settings}>
            {machines.map((machine: MachineInterface, index) => (
              <div className='card' key={index}>
                <figure>
                  <img src={machine.image} alt='' />
                </figure>

                <div className='infos'>
                  <h3>{machine.model}</h3>
                  <p>
                    <FaTag color='var(--principal-darkness-2)' /> Compactadores
                    Combinados (CIL / PNEUS)
                  </p>
                  <p>
                    <FaTractor color='var(--principal-darkness-2)' />
                    {machine.brand}
                  </p>
                  <p>
                    <FaCalendar color='var(--principal-darkness-2)' /> Ano de
                    Fabricação: {machine.year}
                  </p>
                  <p>
                    <FaTachometerAlt color='var(--principal-darkness-2)' />
                    Horimetro: {machine.hourmeter}
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
            {pieces.map((piece: PieceInterface, index) => (
              <div className='card' key={index}>
                <figure>
                  <img src={piece.image} alt={piece.name} />
                </figure>
                <div className='infos'>
                  <h3>
                    {piece.name} - {piece.machine_model}
                  </h3>
                  <p>
                    <FaTag color='var(--principal-darkness-2)' size={20} />
                    {piece.brand.toUpperCase()}
                  </p>
                  <a href='#'>Ver Mais</a>
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
