import styled from 'styled-components';

export const Container = styled.main`
  background: url('/pattern.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  main {
    max-width: 1200px;
    margin: 5rem auto;

    @media (max-width: 720px) {
      margin: 2.5rem auto;
      max-width: 90%;
    }

    @keyframes appear {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

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

    @keyframes appearLeft {
      from {
        opacity: 0;
        transform: translateX(-2rem);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .machineGrid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 5rem auto;
      max-width: 1200px;
      gap: 5rem;
      align-items: center;
      cursor: default;

      img {
        opacity: 0;
        box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.25);
        animation: appearLeft 1s 0.25s forwards;
        width: 100%;
        height: 100%;
        display: block;
      }

      @media (max-width: 720px) {
        grid-template-columns: none;
        grid-template-rows: 1fr 1fr;
        gap: 2.5rem;
        margin: 2.5rem auto;
      }

      .info {
        opacity: 0;
        animation: appearRight 1s 0.25s forwards;

        svg {
          color: var(--principal-darkness-2);
        }

        h1 {
          color: var(--black);
          font-size: 2.4rem;
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          font-family: 'DroidSans', sans-serif;
          font-weight: 700;

          svg {
            margin-right: 1rem;
          }
        }

        span {
          color: #656565;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          display: inline-block;
        }

        hr {
          border: 0;
          min-height: 4px;
          background: linear-gradient(269.28deg, #ffd966 0.52%, #ffd766 100%);
        }

        .fewInfos {
          margin-top: 1rem;

          span {
            color: var(--black);
            display: inline-flex;
            align-items: center;

            svg {
              margin-right: 0.5rem;
            }

            & + span {
              margin-left: 1rem;
            }
          }
        }

        p {
          font-size: 1rem;
          line-height: 1.4;
          color: var(--black);
        }

        a {
          background: var(--blue);
          color: var(--white);
          font-size: 1.2rem;
          margin: 1.6rem 0;
          padding: 0.8rem 1.2rem;
          border-radius: 5px;
          transition: 0.3s;
          display: inline-block;

          :hover {
            filter: brightness(90%);
          }
        }
      }
    }

    .destaques {
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      animation: appear 1s 0.5s forwards;

      .card {
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
        border: 2px solid #d4d4ce;
        max-width: 95%;
        align-self: center;
        justify-self: center;
        border-radius: 7px;
        position: relative;
        background: var(--white);

        img {
          width: 100%;
        }

        .infos {
          padding: 1rem;
          text-align: center;

          h3 {
            font-family: 'DroidSans', sans-serif;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 400;
            color: var(--black);
            text-align: left;
          }

          p {
            color: var(--black-5);
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            font-size: 0.9rem;

            svg {
              margin-right: 0.5rem;
            }
          }

          a {
            font-size: 0.9rem;
            font-weight: 600;
            background: var(--blue);
            color: var(--white);
            text-transform: uppercase;
            padding: 0.875rem 2rem;
            display: inline-block;
            border-radius: 5px;
            transition: 0.3s;

            :hover {
              filter: brightness(90%);
            }
          }
        }
      }
    }
  }
`;
