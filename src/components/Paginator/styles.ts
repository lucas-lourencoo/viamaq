import styled from 'styled-components';

export const Pagination = styled.section`
  width: 100%;
  background: var(--principal-lighter-2);

  @media (max-width: 720px) {
    margin-top: 5rem;
  }

  .text {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 0;

    @media (max-width: 720px) {
      max-width: 90%;
    }
  }

  a,
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--black-5);
  }

  a {
    margin-right: 1rem;
  }

  span + span {
    margin-left: 0.5rem;
  }
`;
