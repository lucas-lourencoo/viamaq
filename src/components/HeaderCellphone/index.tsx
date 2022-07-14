import { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactModal from 'react-modal';
import { Container, NavItem } from './styles';
import { FaBars } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

export default function HeaderCellphone() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(function mount() {
    function onScroll() {
      document.documentElement.scrollTop > 30
        ? setIsActive(true)
        : setIsActive(false);
    }

    window.addEventListener('scroll', onScroll);
    setScreenSize(screen.width);
  }, []);

  const styles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,.3)',
      zIndex: 13,
      animation: 'appearMenuOverlay .2s forwards',
    },
    content: {
      appear: {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      },
      zIndex: 13,
      background: 'var(--blue)',
      borderRadius: 'none',
      border: 'none',
      height: '100vh',
      width: '60%',
      top: 0,
      right: '0',
      inset: '0 0 0 40%',
      animation: 'appearMenu .5s forwards',
    },
  };

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <Container active={isActive} screenSize={screenSize}>
      <Link href='/'>
        <a>
          <img src={'/logo.png'} alt='Logo Viamaq' />
        </a>
      </Link>

      <button onClick={openModal}>
        <FaBars size={24} />
      </button>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={styles}
      >
        <nav>
          <ul>
            <NavItem onClick={closeModal}>
              <Link href='/'>
                <a>Início</a>
              </Link>
            </NavItem>
            <NavItem onClick={closeModal}>
              <Link href='/sobre'>
                <a>Sobre</a>
              </Link>
            </NavItem>
            <NavItem onClick={closeModal}>
              <Link href='/vendas/catalogo?category=M%C3%A1quinas'>
                <a>Venda de Máquinas</a>
              </Link>
            </NavItem>
            <NavItem onClick={closeModal}>
              <Link href='/vendas/catalogo?category=Peças'>
                <a>Venda de Peças</a>
              </Link>
            </NavItem>
            <NavItem onClick={closeModal}>
              <Link href='/series'>
                <a>Série de máquinas</a>
              </Link>
            </NavItem>
            <NavItem onClick={closeModal}>
              <Link href='/contato'>
                <a>Contato</a>
              </Link>
            </NavItem>
            <NavItem>
              <button>
                <FiSearch
                  size={22}
                  strokeWidth={4}
                  color='var(--principal-darkness-1)'
                />
              </button>
            </NavItem>
          </ul>
        </nav>
      </ReactModal>
    </Container>
  );
}
