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
                <a
                  href='https://www.facebook.com/viamaqtratoresepecas'
                  target='__blank'
                >
                  <FaFacebookSquare size={24} /> /viamaq.com.br
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/viamaqtratores/'
                  target='__blank'
                >
                  <FaInstagram size={24} />
                  @viamaq
                </a>
              </li>
              <li>
                <a
                  href='https://goo.gl/maps/rJYCeE5McY11QwtJ6'
                  target='__blank'
                >
                  <FaHome size={24} /> Av coronel Antonino, 5857 - Jardim
                  Montevidéu. CEP: 79035-000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <p className='copy'>Copyright © 2021. All rights reserved for ViaMaq</p>
    </Container>
  );
}
