import styled from 'styled-components';
import { Title } from '../Title';

export const Container = styled.main`
  @keyframes item {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes title {
    from {
      transform: translateX(-1rem);
    }
    to {
      transform: translateX(0);
    }
  }

  ${Title} {
    text-transform: none;
    text-align: center;
    margin-top: 5rem;
    animation: item 1s forwards;
  }

  .seriesGrid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
    max-width: 1200px;
    margin: 3rem auto 5rem;

    .item {
      opacity: 0;
      height: 100%;
      width: 100%;
      padding: 1rem;
      min-height: 180px;
      background: #fafaf5;
      border: 2px solid #d4d4ce;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      animation: item 1s 0.25s forwards;

      :hover {
        filter: brightness(97%);
        transform: translateY(-0.1rem);
      }

      img {
        width: 90%;
      }
    }
  }
`;
