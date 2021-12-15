import {
  FaChevronRight,
  FaFacebookSquare,
  FaHome,
  FaInstagram,
} from 'react-icons/fa';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <section className='footerGrid'>
        <div className='content'>
          <div className='infos'>
            <img src='/logo.svg' alt='Logo Viamaq' />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel sollicitudin tortor
            </p>
          </div>
          <div className='links'>
            <h4>Links úteis</h4>
            <ul>
              <li>
                <FaChevronRight /> Lorem ipsum
              </li>
              <li>
                <FaChevronRight />
                Lorem ipsum
              </li>
              <li>
                <FaChevronRight />
                Lorem ipsum
              </li>
              <li>
                <FaChevronRight />
                Lorem ipsum
              </li>
            </ul>
          </div>
          <div className='links'>
            <h4>Links úteis</h4>
            <ul>
              <li>
                <FaChevronRight />
                Lorem ipsum
              </li>
              <li>
                <FaChevronRight />
                Lorem ipsum
              </li>
              <li>
                <FaChevronRight />
                Lorem ipsum
              </li>
              <li>
                <FaChevronRight />
                Lorem ipsum
              </li>
            </ul>
          </div>
          <div className='social'>
            <h4>Fique informado</h4>
            <ul>
              <li>
                <FaFacebookSquare size={30} /> /viamaq.com.br
              </li>
              <li>
                <FaInstagram size={30} />
                @viamaq
              </li>
              <li>
                <FaHome size={70} /> Av coronel Antonino, 5.857 - Jardim
                Montevidéu. CEP: 79035-000
              </li>
            </ul>
          </div>
        </div>
      </section>
      <p className='copy'>Copyright © 2021. All rights reserved for ViaMaq</p>
    </Container>
  );
}
