import Image from 'next/image';
import Link from 'next/link';
import { Container } from './styles';
import { FiMail, FiPhone, FiPlus, FiSearch } from 'react-icons/fi';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function Header() {
  return (
    <Container>
      <div className='blueTop'>
        <div className='container'>
          <div className='contact'>
            <p>
              <FiPhone size={22} /> (67) 9 9999-9999
            </p>
            <p>
              <FiMail size={22} /> email@email.org
            </p>
            <p>
              <FaWhatsapp size={22} /> (67) 99816-1571
            </p>
          </div>
          <div className='social'>
            <a href=''>
              <FaFacebookSquare size={26} />
            </a>
            <a href=''>
              <FaInstagram size={26} />
            </a>
          </div>
        </div>
      </div>
      <div className='menu'>
        <Image src='/logo.svg' alt='Logo Viamaq' width={168} height={49} />
        <nav>
          <ul>
            <li>
              <Link href=''>
                <a>Início</a>
              </Link>
            </li>
            <li>
              <Link href=''>
                <a>Sobre</a>
              </Link>
            </li>
            <li>
              <Link href=''>
                <a>
                  Venda
                  <FiPlus size={14} strokeWidth={3} color='var(--principal)' />
                </a>
              </Link>
            </li>
            <li>
              <Link href=''>
                <a>Série de máquinas</a>
              </Link>
            </li>
            <li>
              <Link href=''>
                <a>Buscar máquinas</a>
              </Link>
            </li>
            <li>
              <Link href=''>
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
