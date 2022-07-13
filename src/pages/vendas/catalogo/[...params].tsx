import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Footer } from '../../../components/Footer';
import { Paginator } from '../../../components/Paginator';
import { Container } from '../../../styles/pages/catalog';
import api from '../../../services/axios';
import { useRouter } from 'next/router';
import Filter from '../../../components/Filter';
import { FaTag } from 'react-icons/fa';

const Catalog: NextPage = () => {
  const [results, setResults] = useState([] as Product[]);
  const router = useRouter();

  function getData() {
    try {
      if (router.query?.category)
        api
          .get(
            `/produtos?populate=%2A&filters[category][$eq]=${router.query?.category}`
          )
          .then(({ data }) => {
            setResults(data.data);
          });
      else
        api.get('/produtos?populate=%2A').then(({ data }) => {
          setResults(data.data);
        });
    } catch (err) {}
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [router.query]);

  return (
    <Container>
      <Head>
        <title>Viamaq - Tratores e Peças | Catálogo</title>
      </Head>

      <Paginator text='Venda | Catálogo' />

      <main>
        <Filter setResults={setResults} />

        {results.length > 0 ? (
          <section className='grid'>
            {results.map((product: Product) => (
              <Link
                href={`/vendas/produtos/${product.id}`}
                key={product.id}
                passHref
              >
                <a href='#'>
                  <div className='item'>
                    <img
                      src={product.attributes.images.data[0].attributes.url}
                      alt={product.attributes.name}
                    />
                    <h2>{product.attributes.name}</h2>
                    <p>
                      <FaTag color='var(--principal-darkness-2)' size={20} />
                      {product.attributes.brand.toUpperCase()}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </section>
        ) : (
          <div className='noResultsFounded'>
            <p>Nenhum produto encontrado!</p>
            <button onClick={router.back}>Voltar</button>
          </div>
        )}
      </main>
      <Footer />
    </Container>
  );
};

export default Catalog;
