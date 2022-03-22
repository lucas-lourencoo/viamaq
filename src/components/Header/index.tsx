import Link from 'next/link';
import { Container } from './styles';
import { FiMail, FiPhone, FiPlus, FiSearch } from 'react-icons/fi';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export function Header() {
  const [isActive, setActive] = useState(false);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!isActive && window.pageYOffset > 3) {
        setActive(true);
      } else if (isActive && window.pageYOffset <= 3) {
        setActive(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    setScreenSize(screen.width);
  });

  return (
    <Container isActive={isActive} screenSize={screenSize}>
      <div className='blueTop'>
        <div className='container'>
          <div className='contact'>
            <a href='#'>
              <FiPhone size={24} /> (67) 3355-5562
            </a>
            <a href='#'>
              <FiMail size={24} /> viamaq@viamaqtratores.com.br
            </a>
            <a href='#'>
              <FaWhatsapp size={24} /> (67) 99861-2017
            </a>
          </div>
          <div className='social'>
            <a
              href='https://www.facebook.com/viamaqtratoresepecas'
              target='__blank'
            >
              <FaFacebookSquare size={26} />
            </a>
            <a
              href='https://www.instagram.com/viamaqtratores/'
              target='__blank'
            >
              <FaInstagram size={26} />
            </a>
          </div>
        </div>
      </div>
      <div className='menu'>
        <Link href='/'>
          <a>
            <img src='/logo.svg' alt='Logo Viamaq' />
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href='/'>
                <a>Início</a>
              </Link>
            </li>
            <li>
              <Link href='/sobre'>
                <a>Sobre</a>
              </Link>
            </li>
            <li>
              <a>
                Venda
                <FiPlus size={14} strokeWidth={3} color='var(--principal)' />
              </a>
              <ul className='subMenu'>
                <li>
                  <Link href='/vendas/catalogo'>
                    <a>Máquinas</a>
                  </Link>
                </li>
                <li>
                  <Link href='/vendas/catalogo'>
                    <a>Peças</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/series'>
                <a>Série de máquinas</a>
              </Link>
            </li>
            <li>
              <Link href='/buscar'>
                <a>Buscar máquinas</a>
              </Link>
            </li>
            <li>
              <Link href='/contato'>
                <a>Contato</a>
              </Link>
            </li>
            <li>
              <button>
                <FiSearch
                  size={22}
                  strokeWidth={4}
                  color='var(--principal-darkness-1)'
                />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
