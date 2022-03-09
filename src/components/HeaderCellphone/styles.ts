import styled from 'styled-components';

interface ContainerProps {
  active: boolean;
  screenSize: number;
}

export const Container = styled.header<ContainerProps>`
  @keyframes appearMenuOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes appearMenu {
    from {
      transform: translateX(50%);
    }
  }

  display: ${(props) => props.screenSize >= 720 && 'none'};
  position: ${(props) => (props.active ? 'fixed' : 'absolute')};
  background-color: var(--white);
  top: 0;
  left: 0;
  right: 0;
  z-index: 12;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.6rem;
  box-shadow: ${(props) =>
    props.active ? '0px 1px 4px rgb(36, 36, 36)' : 'none'};

  img {
    max-width: 9rem;
  }

  button {
    background: transparent;
    color: var(--principal-darkness-1);
    padding: 0.4rem;
    border: 2px solid var(--principal-darkness-1);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NavItem = styled.li`
  font-size: 1rem;
  color: var(--white);
  font-weight: 600;
  text-transform: uppercase;
  transition: 0.4s;
  font-family: 'Lato', sans-serif;

  @media (max-width: 720px) {
    text-align: right;
    display: block;
    font-size: 1.2rem;
    padding-bottom: 1.4rem;
    position: relative;
    z-index: 0;
  }

  .subMenu {
    display: none;
  }

  svg {
    margin-left: 0.4rem;
    font-size: 1.6rem;
  }

  &:hover {
    color: #1d65e2;
  }
`;
