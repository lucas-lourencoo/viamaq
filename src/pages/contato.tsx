import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Paginator } from '../components/Paginator';
import { Container } from '../styles/pages/contact';
import { Title } from '../styles/Title';

const Contato = () => {
  return (
    <Container>
      <Header />
      <Paginator text='Contato' />

      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.7985937852227!2d-54.5951157850774!3d-20.43236778632444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e8669d75fd37%3A0x9dc163c9b0aa0562!2sAv.%20Cel.%20Antonino%2C%205153%20-%20Cel.%20Antonino%2C%20Campo%20Grande%20-%20MS%2C%2079013-000!5e0!3m2!1spt-BR!2sbr!4v1639076279172!5m2!1spt-BR!2sbr'
        width='600'
        height='450'
        allowFullScreen
        loading='lazy'
        style={{ border: 0 }}
      ></iframe>

      <main className='center'>
        <ul className='left'>
          <li>
            <Title>Endereço</Title>
            <div className='down'>
              <span>
                <FiMapPin size={24} />
              </span>
              <span>
                Av. Ministro João Arinos, 4136 | B. Tirandentes Campo Grande
                Mato Grosso do Sul. CEP 79062-120
              </span>
            </div>
          </li>
          <li>
            <Title>Telefone</Title>
            <div className='down'>
              <span>
                <FiPhone size={24} />
              </span>
              <span>+55 67 3342-9000</span>
            </div>
          </li>
          <li>
            <Title>Email</Title>
            <div className='down'>
              <span>
                <FiMail size={24} />
              </span>
              <span>contato@ieducaa.org</span>
            </div>
          </li>
        </ul>
        <div className='right'>
          <Title>Informações diversas</Title>
          <p>
            Envie-nos um email com dúvidas ou perguntas que entraremos em
            contato:
          </p>

          <form action='' method='POST'>
            <fieldset>
              <input type='text' placeholder='Nome' name='name' required />
              <input type='email' placeholder='Email' name='email' required />
              <input
                type='tel'
                placeholder='Telefone'
                name='telephone'
                required
              />
            </fieldset>
            <textarea
              name='message'
              id='message'
              cols={30}
              rows={10}
              placeholder='Mensagem'
              required
            ></textarea>
            <button type='submit'>Enviar</button>
          </form>
        </div>
      </main>
      <Footer />
    </Container>
  );
};

export default Contato;
