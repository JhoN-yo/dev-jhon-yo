import styled from 'styled-components';

export const NavBarContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;

  nav {
    width: 14rem;
    height: 3rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    border-radius: 20px;
    justify-content: center;
    margin-bottom: 2rem;
    background: ${(props) => props.theme['gray-700']};

    svg {
      color: white;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: ${(props) => props.theme['blue-500']};
      }
    }
  }
`;
