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

      @media (max-width: 720px) {
        grid-template-columns: none;
        max-width: 90%;
      }

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
        ul li a {
          display: flex;
          align-items: center;
          font-size: 1.125rem;
          transition: 0.3s;
          position: relative;
          padding-left: 1.25rem;

          :hover {
            color: var(--principal-lighter-2);
          }

          svg {
            position: absolute;
            left: -1rem;
          }
        }
      }

      .infos {
        img {
          margin-bottom: 1rem;
          max-width: 80%;
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
