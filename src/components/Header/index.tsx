import Link from 'next/link';
import { Container } from './styles';
import { FiMail, FiPhone, FiSearch } from 'react-icons/fi';
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
            <a
              href='https://api.whatsapp.com/send?phone=5567998319814&text=https://api.whatsapp.com/send?phone=5567998319814&text=Ol%C3%A1,%20gostaria%20de%20comprar%20uma%20m%C3%A1quina/pe%C3%A7a!'
              target='_blank'
              title='Whatsapp Button'
            >
              <FaWhatsapp size={24} /> (67) 99831-9814
            </a>
          </div>
          <div className='social'>
            <a
              href='https://www.facebook.com/viamaqtratoresepecas'
              target='__blank'
              title='Facebook'
            >
              <FaFacebookSquare size={26} />
            </a>
            <a
              href='https://www.instagram.com/viamaqtratores/'
              target='__blank'
              title='Instagram'
            >
              <FaInstagram size={26} />
            </a>
          </div>
        </div>
      </div>
      <div className='menu'>
        <Link href='/'>
          <a>
            <img src='/logo.png' alt='Logo Viamaq' />
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href='/'>
                <a>In??cio</a>
              </Link>
            </li>
            <li>
              <Link href='/sobre'>
                <a>Sobre</a>
              </Link>
            </li>
            <li>
              <Link href='/vendas/catalogo?category=M%C3%A1quinas'>
                <a>Venda de M??quinas</a>
              </Link>
            </li>
            <li>
              <Link href='/vendas/catalogo?category=Pe??as'>
                <a>Venda de Pe??as</a>
              </Link>
            </li>
            <li>
              <Link href='/series'>
                <a>S??rie de m??quinas</a>
              </Link>
            </li>
            {/* <li>
              <Link href='/buscar'>
                <a>Buscar m??quinas</a>
              </Link>
            </li> */}
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
