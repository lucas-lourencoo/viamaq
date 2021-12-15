import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  .blueTop {
    background: var(--blue);

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1200px;
      padding: 0.5rem 0;

      svg {
        color: var(--principal-lighter-1);
      }

      .contact {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-size: 1.125rem;
          padding-right: 1.5rem;

          & + p {
            border-left: 1px solid var(--white);
            padding: 0 1.5rem;
          }

          svg {
            margin-right: 1rem;
          }
        }
      }

      .social {
        display: flex;
        align-items: center;
        justify-content: center;

        a + a {
          margin-left: 1.5rem;
        }
      }
    }
  }

  .menu {
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    @keyframes appearTop {
      from {
        opacity: 0;
        transform: translateY(-0.4rem);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    animation: appearTop 0.8s forwards;

    img {
      min-width: 14rem;
    }

    nav {
      display: inline;

      ul {
        display: flex;
        align-items: center;
        justify-content: center;

        li {
          display: inline-flex;
          text-transform: uppercase;
          padding: 0 0.5rem;
          font-weight: 500;

          a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: 0.2s;

            :hover {
              font-weight: 700;
            }

            svg {
              margin-left: 0.25rem;
            }
          }
        }
      }
    }
  }
`;
