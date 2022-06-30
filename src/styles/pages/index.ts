import styled from 'styled-components';

export const Container = styled.div`
  .banner {
    background: url('/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    height: 80vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .text {
      color: var(--white);
      margin-left: 7rem;
      max-width: 600px;

      @media (max-width: 720px) {
        max-width: 90%;
        margin: 0 auto;
      }

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

      @keyframes rightIcon {
        from {
          transform: translateX(0.5rem);
        }
        to {
          transform: translateX(0);
        }
      }

      h1 {
        font-weight: 700;
        font-size: 4rem;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        font-family: 'DroidSans', sans-serif;
        animation: appear 1s forwards;

        @media (max-width: 720px) {
          font-size: 3.2rem;
        }
      }

      hr {
        height: 8px;
        border: 0;
        background: linear-gradient(90deg, #fccb42 0%, #ffe663 100%);
        border-radius: 50px;
        max-width: 90%;
        animation: appear 1.3s forwards;
      }

      h2 {
        font-weight: 400;
        font-size: 2.25rem;
        margin-top: 1.5rem;
        font-family: 'DroidSans', sans-serif;
        animation: appear 1.6s forwards;

        span {
          color: var(--principal-lighter-2);
        }
      }

      a {
        padding: 1rem 1.5rem;
        display: inline-flex;
        background: var(--principal);
        align-items: center;
        justify-content: center;
        color: var(--black);
        font-size: 1.5rem;
        margin-top: 3.5rem;
        font-weight: 600;
        transition: 0.3s;
        animation: appear 1.8s forwards;

        :hover {
          filter: brightness(90%);
        }

        svg {
          margin-left: 1rem;
          animation: rightIcon 0.5s forwards infinite alternate;
        }
      }
    }
  }

  .about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    margin: 3rem auto;
    gap: 5rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 720px) {
      grid-template-columns: none;
      gap: 2rem;
      max-width: 90%;
    }

    img {
      max-width: 514px;

      @media (max-width: 720px) {
        max-width: 100%;
      }
    }

    .text {
      text-align: center;

      p {
        color: #5a5a57;
        font-size: 1.125rem;
        font-weight: 400;
        text-align: left;

        + p {
          margin-top: 1rem;
        }
      }
    }
  }

  .destaques {
    max-width: 1200px;
    margin: 4rem auto;

    @media (max-width: 720px) {
      max-width: 90%;
    }

    .card {
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
      border: 2px solid #d4d4ce;
      max-width: 95%;
      align-self: center;
      justify-self: center;
      border-radius: 7px;
      position: relative;

      figure {
        width: 100%;
        overflow: hidden;
        height: 14rem;
        display: flex;
        align-items: center;

        img {
          width: 100%;
        }
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

  .partnersLine {
    width: 100%;
    background: linear-gradient(269.28deg, #ffd966 0.52%, #ffd766 100%);
    margin-top: 3rem;

    a {
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      max-width: 75%;
      height: 11rem !important;

      img {
        filter: grayscale(100%);
        transition: 0.2s;

        :hover {
          filter: none;
        }
      }
    }
  }

  .destaquesPieces {
    max-width: 1200px;
    margin: 5rem auto;

    @media (max-width: 720px) {
      max-width: 90%;
      margin: 3rem auto;
    }

    .card {
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
      border: 2px solid #d4d4ce;
      max-width: 90%;
      align-self: center;
      justify-self: center;
      border-radius: 7px;
      position: relative;

      figure {
        width: 100%;
        overflow: hidden;
        height: 13rem;
        display: flex;
        align-items: center;

        img {
          width: 100%;
        }
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
          font-size: 0.875rem;
          text-align: left;

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
          padding: 0.5rem 2rem;
          display: inline-block;
          border-radius: 5px;
          margin-top: 1rem;
          transition: 0.3s;

          :hover {
            filter: brightness(90%);
          }
        }
      }
    }
  }

  iframe {
    width: 100%;
    border: 0;
    max-height: 240px;
    border-top: 3px solid var(--blue);
  }
`;
