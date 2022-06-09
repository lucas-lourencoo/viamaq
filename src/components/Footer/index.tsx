import Link from 'next/link';
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
              Máquinas, Tratores & Peças. Todos com qualidade e procedência!
            </p>
          </div>
          <div className='links'>
            <h4>Links úteis</h4>
            <ul>
              <li>
                <Link href='sobre'>
                  <a>
                    <FaChevronRight /> Sobre nós
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/vendas/catalogo?category=Máquinas'>
                  <a>
                    <FaChevronRight /> Nosso Catálogo
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/contato'>
                  <a>
                    <FaChevronRight /> Contato
                  </a>
                </Link>
              </li>
              <li>
                <a href='https://api.whatsapp.com/send?phone=5567998319814&text=https://api.whatsapp.com/send?phone=5567998319814&text=Ol%C3%A1,%20gostaria%20de%20comprar%20uma%20m%C3%A1quina/pe%C3%A7a!'>
                  <FaChevronRight /> Whatsapp
                </a>
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
                  href='https://goo.gl/maps/jekHHpN4ou3pExTB7'
                  target='__blank'
                >
                  <FaHome size={24} /> Av. Cel. Antonino, 5857 - Bairro JD
                  Montevidéu. | Campo Grande/MS - CEP: 79035-000
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
