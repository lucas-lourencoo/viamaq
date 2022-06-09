import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Footer } from '../../../components/Footer';
import { Paginator } from '../../../components/Paginator';
import { Title } from '../../../styles/Title';
import { Container } from '../../../styles/pages/single';
import {
  FaCalendar,
  FaCogs,
  FaDollarSign,
  FaTachometerAlt,
  FaTractor,
} from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface PieceProps {
  product: Product;
  destaques: Product[];
}

const Products = ({ product, destaques }: PieceProps) => {
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
        <title>Viamaq - Tratores e Peças | ${product?.attributes.name}</title>
      </Head>

      <Paginator text={`Venda | ${product?.attributes.name}`} />

      <main>
        <section className='machineGrid'>
          <img
            src={product?.attributes?.images.data[0].attributes.url}
            alt=''
          />
          <section className='info'>
            <h1>
              <FaCogs /> {product?.attributes.name}
            </h1>
            <span>Marca: {product?.attributes.brand.toUpperCase()}</span>
            <hr />
            <div className='fewInfos'>
              <span>
                <FaCalendar /> Ano de Fabricação: {product?.attributes?.year}
              </span>
              <span>
                <FaTachometerAlt /> Horímetro: {product?.attributes?.hourmeter}
              </span>
              <span>
                <FaDollarSign /> Valor:{' '}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product?.attributes.value)}
              </span>
            </div>
            <p>{product?.attributes.description}</p>
          </section>
        </section>

        <section className='destaques'>
          <Title>MÁQUINAS EM DESTAQUE</Title>
          <Slider {...settings}>
            {destaques?.map((destaque) => (
              <div className='card'>
                <img
                  src={destaque?.attributes?.images.data[0].attributes.url}
                  alt=''
                />
                <div className='infos'>
                  <h3>{destaque?.attributes?.name}</h3>
                  <p>
                    <FaTractor color='var(--principal-darkness-2)' />{' '}
                    {product?.attributes.brand.toUpperCase()}
                  </p>
                  <p>
                    <FaCalendar color='var(--principal-darkness-2)' /> Ano de
                    Fabricação: {product?.attributes?.year}
                  </p>
                  <p>
                    <FaTachometerAlt color='var(--principal-darkness-2)' />
                    Horimetro: {product?.attributes?.hourmeter}
                  </p>
                  <a href='#'>Ver Mais</a>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </main>

      <Footer />
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    'https://strapi-viamaq.herokuapp.com/api/produtos?populate=%2A'
  );
  const { data } = await res.json();

  const paths = data?.map((piece: Product) => ({
    params: {
      id: piece.id.toString(),
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://strapi-viamaq.herokuapp.com/api/produtos/${params?.id}?populate=%2A`
  );
  const { data } = (await res.json()) ?? null;

  const resDestaques = await fetch(
    `https://strapi-viamaq.herokuapp.com/api/produtos?populate=%2A&[filters][category][$eq]=${data.attributes.category}`
  );
  const dataDestaque = (await resDestaques.json()) ?? null;

  return { props: { product: data, destaques: dataDestaque.data } };
};

export default Products;
