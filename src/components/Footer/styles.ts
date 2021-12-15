import styled from 'styled-components';

export const Container = styled.footer`
  background: url('/background-footer.png');
  color: var(--white);

  .footerGrid {
    background: rgba(26, 54, 150, 0.85);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 5rem 0;
      gap: 3rem;

      svg {
        color: var(--principal-lighter-2);
        margin-right: 0.5rem;
      }

      ul li {
        display: flex;
        align-items: center;
        margin-left: 0.5rem;
        font-size: 1.125rem;

        + li {
          margin-top: 1rem;
        }
      }

      h4 {
        font-family: 'DroidSans', sans-serif;
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
      }

      .social {
        ul li {
          font-size: 1.125rem;
          margin-left: 0;
        }
      }

      .infos {
        img {
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.125rem;
        }
      }
    }
  }

  p.copy {
    background: #1a3696;
    padding: 1rem 0;
    text-align: center;
    font-size: 14px;
  }
`;
