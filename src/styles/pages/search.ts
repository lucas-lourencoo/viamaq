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
      max-width: 90%;
      margin-top: 2.5rem;
    }

    form {
      .grid {
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;

        @media (max-width: 720px) {
          grid-template-columns: none;
        }

        .inputGroup {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;

          label {
            font-weight: 600;
            color: var(--black);
          }

          input,
          select {
            border: 1px solid #ffd966;
            border-radius: 3px;
            width: 100%;
            padding: 1rem 0.5rem;
            margin-top: 0.5rem;
            color: var(--black-5);
            font-size: 1rem;
            background: var(--white);
          }
        }
      }

      button {
        display: inline-block;
        margin-top: 1.5rem;
        background: var(--blue);
        color: var(--white);
        font-size: 1.125rem;
        border-radius: 5px;
        padding: 1rem 3rem;
        transition: 0.3s;

        :hover {
          filter: brightness(95%);
        }
      }
    }
  }
`;
