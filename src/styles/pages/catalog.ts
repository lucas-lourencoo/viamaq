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

    .filter {
      width: 100%;
      margin-right: 3rem;
      max-height: 680px;
      height: 100%;

      @keyframes fromLeft {
        from {
          transform: translateX(-1rem);
          opacity: 0;
        }
      }

      @keyframes fromRight {
        from {
          transform: translateX(1rem);
          opacity: 0;
        }
      }

      background: #fafaf5;
      border: 1px solid #e3aa00;
      animation: fromLeft 0.8s forwards;

      h2 {
        text-align: center;
        background: #e3aa00;
        color: var(--white);
        font-size: 1.125rem;
        text-transform: uppercase;
        font-weight: 700;
        padding: 1rem 0;
      }

      form {
        padding: 0 0.5rem;
        margin-top: 1.5rem;

        button {
          background: var(--blue);
          color: var(--white);
          font-size: 1rem;
          width: 100%;
          margin: 2rem 0;
          padding: 0.8rem 0;
          border-radius: 5px;
          transition: 0.3s;

          :hover {
            filter: brightness(90%);
          }
        }

        h3 {
          border-bottom: 2px solid #bababa;
          padding: 0.25rem 0;
          margin-top: 1rem;
        }

        .input {
          display: flex;
          align-items: center;
          margin-top: 0.5rem;

          input[type='radio'],
          input[type='checkbox'] {
            width: 16px;
            height: 16px;
            margin-right: 0.25rem;
          }

          select {
            border: 1px solid #ffd966;
            box-sizing: border-box;
            border-radius: 3px;
            width: 100%;
            padding: 0.5rem;
            margin-top: 0.5rem;
          }
        }

        .inputRange {
          display: flex;
          justify-content: center;
          flex-direction: column;

          input {
            margin-top: 0.5rem;
          }

          label {
            margin-top: 0.5rem;
          }
        }
      }
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

        :hover {
          transform: scale(1.025);
          background: #f2f2f2;
        }

        img {
          width: 100%;
          max-height: 10rem;
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
