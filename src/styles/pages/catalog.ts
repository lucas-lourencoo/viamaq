import styled from 'styled-components';

export const Container = styled.main`
  background-image: url('/pattern.png');
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;

  main {
    display: grid;
    max-width: 1200px;
    margin: 5rem auto;
    gap: 2rem;
    grid-template-columns: 25% 75%;

    @media (max-width: 720px) {
      grid-template-columns: none;
      width: 90%;
      margin: 2.5rem auto;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.5rem;
      animation: fromRight 1s forwards;
      height: auto;

      @media (max-width: 720px) {
        grid-template-columns: none;
      }

      .item {
        width: 100%;
        background: #fafaf5;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        overflow: hidden;
        transition: 0.3s;
        cursor: pointer;
        height: 20rem;

        p {
          padding: 0 1rem;
          color: var(--black-5);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          font-size: 0.9rem;

          svg {
            margin-right: 0.5rem;
          }
        }

        :hover {
          transform: scale(1.025);
          background: #f2f2f2;
        }

        img {
          width: 100%;
          max-height: 10rem;
        }

        h2 {
          padding: 1rem;
          text-align: center;
          font-size: 1.5rem;
          font-weight: 400;
        }
      }
    }

    .noResultsFounded {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      p {
        font-size: 2rem;
        font-weight: 700;
        color: #d64242;
      }

      button {
        background: var(--blue);
        color: var(--white);
        font-size: 1.2rem;
        margin: 1rem 0;
        padding: 0.8rem 1.6rem;
        border-radius: 5px;
        transition: 0.3s;
        :hover {
          filter: brightness(90%);
        }
      }
    }
  }
`;
