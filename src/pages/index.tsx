import type { NextPage } from 'next';
import { FiArrowRight } from 'react-icons/fi';
import { Header } from '../components/Header';
import { Container } from '../styles';

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <main>
        <div className='banner'>
          <div className='text'>
            <h1>Máquinas, Tratores & Equipamentos</h1>
            <hr />
            <h2>
              Todos com <span>qualidade</span> e <span>garantia</span>!
            </h2>

            <a href=''>
              Conferir catálogo <FiArrowRight strokeWidth={3} size={30} />
            </a>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Home;
