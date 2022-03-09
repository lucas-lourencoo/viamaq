import styled from 'styled-components';
import { Title } from '../Title';

export const Container = styled.main`
  background: url('/pattern.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  iframe {
    width: 100%;
    max-height: 280px;
  }

  .center {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 5rem auto;
    align-items: center;

    @media (max-width: 720px) {
      grid-template-columns: none;
      max-width: 90%;
      margin: 2.5rem auto;
      gap: 2rem;
    }

    .left {
      width: 100%;

      li {
        font-size: 1.125rem;
        color: var(--black-5);
        margin-bottom: 2rem;

        span + span {
          margin-left: 1rem;
        }
      }

      ${Title} {
        margin-bottom: 0.5rem;
        text-align: center;
      }

      .down {
        display: flex;
        align-items: center;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      text-align: center;

      ${Title} {
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1.125rem;
      }

      form {
        margin-top: 2rem;

        fieldset {
          border: 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1.5rem;

          @media (max-width: 720px) {
            grid-template-columns: none;
          }

          input {
            background: #fafaf5;
            border: 1px solid #ffd966;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 1rem 0.5rem;
          }
        }

        textarea {
          resize: none;
          width: 100%;
          background: #fafaf5;
          border: 1px solid #ffd966;
          box-sizing: border-box;
          border-radius: 5px;
          padding: 1rem 0.5rem;
          margin-top: 1rem;
        }
      }

      button {
        font-size: 1rem;
        font-weight: 600;
        background: var(--blue);
        color: var(--white);
        text-transform: uppercase;
        padding: 0.875rem 2rem;
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
`;
