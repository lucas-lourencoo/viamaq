import styled from 'styled-components';

export const Title = styled.h2`
  text-transform: uppercase;
  font-family: 'DroidSans', sans-serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--black);

  span {
    color: vaR(--principal-darkness-2);
  }

  @media (max-width: 720px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;
