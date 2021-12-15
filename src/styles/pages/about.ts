import styled from 'styled-components';
import { Title } from '../Title';

export const Container = styled.main`
  background-image: url('/pattern.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @keyframes appearRight {
    from {
      opacity: 0;
      transform: translateX(2rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .centerText {
    @keyframes appear {
      from {
        opacity: 0;
        transform: translateX(-2rem);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    img {
      opacity: 0;
      filter: drop-shadow(-2px 4px 8px rgba(0, 0, 0, 0.25));
      animation: appearRight 1s 0.25s forwards;
    }

    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 5rem auto;
    max-width: 1200px;
    gap: 5rem;
    align-items: center;

    ${Title} {
      margin-bottom: 1.5rem;
      animation: appear 1.5s forwards;
    }

    p {
      animation: appear 1.5s forwards;
      font-size: 1.125rem;
      color: var(--black);

      + p {
        margin-top: 1rem;
      }
    }
  }
`;
