import styled from 'styled-components';

export const FilterContainer = styled.section`
  width: 100%;
  margin-right: 3rem;
  max-height: 740px;
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
`;
