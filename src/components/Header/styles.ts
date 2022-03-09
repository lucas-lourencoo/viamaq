import styled from 'styled-components';

interface ContainerProps {
  isActive: boolean;
  screenSize: number;
}

export const Container = styled.header<ContainerProps>`
  display: ${(props) => props.screenSize <= 720 && 'none'};
  width: 100%;
  background: var(--white);
  overflow: visible;
  position: ${(props) => (props.isActive ? 'sticky' : 'relative')};
  top: ${(props) => props.isActive && 0};
  box-shadow: ${(props) => props.isActive && '0px 1px 4px rgb(105 105 105)'};
  z-index: 50;

  .blueTop {
    background: var(--blue);

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1200px;
      padding: 0.4rem 0;

      svg {
        color: var(--principal-lighter-1);
      }

      .contact {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-size: 1rem;
          padding-right: 1rem;
          transition: 0.2s;

          :hover {
            color: var(--principal-lighter-2);
          }

          & + a {
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

        a svg:hover {
          filter: brightness(110%);
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
      max-width: 13rem;
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
          position: relative;
          height: 100%;
          cursor: pointer;

          &:hover .subMenu {
            display: inline-block;
          }

          .subMenu {
            position: absolute;
            display: none;
            color: #fff;
            background: var(--blue);
            top: 110%;
            transition: 0.3s;
            border-radius: 3px;
            animation-name: up;
            animation-duration: 400ms;
            animation-delay: 100ms;
            animation-fill-mode: backwards;
            left: -25%;

            li {
              width: 100%;
              border-bottom: 2px solid #e3aa00;

              + li {
                border: 0;
              }

              a {
                color: #ffffff;
                display: inline-block;
                font-size: 1rem;
                padding: 0.5rem 2rem 0.5rem 0;
                width: 100%;

                + a {
                  padding: 0.5rem 2rem 0 0;
                }

                &:hover {
                  color: var(--principal);
                }
              }
            }
          }

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
