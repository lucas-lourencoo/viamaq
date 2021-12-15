import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Paginator } from '../components/Paginator';
import { Container } from '../styles/pages/about';
import { Title } from '../styles/Title';

export default function About() {
  return (
    <Container>
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
}
