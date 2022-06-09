import { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Paginator } from '../components/Paginator';
import { Container } from '../styles/pages/contact';
import { Title } from '../styles/Title';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contato: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Viamaq - Tratores e Peças | Contato</title>
      </Head>

      <Paginator text='Contato' />

      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.465115445441!2d-54.570982685141836!3d-20.40493238633955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e83254562943%3A0xea2c5fb98bcd85e5!2sAv.%20Cel.%20Antonino%2C%205857%20-%20Coronel%20Antonino%2C%20Campo%20Grande%20-%20MS%2C%2079062-200!5e0!3m2!1spt-BR!2sbr!4v1654808879718!5m2!1spt-BR!2sbr'
        width='600'
        height='450'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
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
                Av. Cel. Antonino, 5857 - Bairro JD Montevidéu. | Campo
                Grande/MS - CEP: 79035-000
              </span>
            </div>
          </li>
          <li>
            <Title>Telefone</Title>
            <div className='down'>
              <span>
                <FiPhone size={24} />
              </span>
              <span>+55 67 3355-5562</span>
            </div>
          </li>
          <li>
            <Title>Email</Title>
            <div className='down'>
              <span>
                <FiMail size={24} />
              </span>
              <span>viamaq@viamaqtratores.com.br</span>
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
