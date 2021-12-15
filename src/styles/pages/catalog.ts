import styled from 'styled-components';

export const Container = styled.main`
  background-image: url('/pattern.png');
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;

  main {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 5rem auto;

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      gap: 1.5rem;

      .item {
        width: 100%;
        background: #fafaf5;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        overflow: hidden;

        img {
          width: 100%;
        }

        h2 {
          padding: 1.5rem 1rem;
          text-align: center;
          font-size: 1.5rem;
          font-weight: 400;
        }
      }
    }
  }
`;
