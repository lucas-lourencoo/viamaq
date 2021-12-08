import styled from 'styled-components';

export const Container = styled.div`
  .banner {
    background: url('/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    min-height: 80vh;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .text {
      color: var(--white);
      margin-left: 7rem;
      max-width: 600px;

      h1 {
        font-weight: 700;
        font-size: 4rem;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        font-family: 'DroidSans', sans-serif;
      }

      hr {
        height: 8px;
        border: 0;
        background: linear-gradient(90deg, #fccb42 0%, #ffe663 100%);
        border-radius: 50px;
        max-width: 90%;
      }

      h2 {
        font-weight: 400;
        font-size: 2.25rem;
        margin-top: 1.5rem;
        font-family: 'DroidSans', sans-serif;

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

        :hover {
          filter: brightness(90%);
        }

        svg {
          margin-left: 1rem;
        }
      }
    }
  }
`;
