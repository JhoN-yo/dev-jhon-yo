import styled from 'styled-components';

export const SideBarContainer = styled.div`
  width: 18rem;
  margin-right: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['gray-700']};

  width: 100%;
  height: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px 20px 0 0;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }

  strong {
    font-size: 1.1rem;
    margin-top: 1rem;
  }

  span {
    font-size: 0.8rem;
    font-weight: 300;
    padding-top: 0.2rem;
    opacity: 80%;
    color: ${(props) => props.theme['opacity']};
  }
`;

export const LocationInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 0;
  background: ${(props) => props.theme['gray-500']};
  border-top: 3px solid ${(props) => props.theme['gray-800']};
  border-bottom: 3px solid ${(props) => props.theme['gray-800']};
  transition: all 1s ease-in-out;

  p {
    font-size: 0.8rem;
  }
  &:hover {
    svg {
      color: ${(props) => props.theme['blue-500']};
    }
  }
`;

export const PersonalContainer = styled.div`
  width: 100%;
  height: 36rem;
  padding: 1.6rem;
  background: ${(props) => props.theme['gray-700']};
`;

export const HardSkills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  ul {
    font-size: 0.8rem;
    list-style: none;
    text-transform: uppercase;
    color: ${(props) => props.theme['opacity']};

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      line-height: 1.6;
      transition: 0.3s;

      img {
        width: 1rem;
      }
    }

    #htmlIcon:hover {
      color: #e44d26;
    }

    #cssIcon:hover {
      color: #379ad6;
    }
    #jsIcon:hover {
      color: #f7df1d;
    }
    #tsIcon:hover {
      color: #007acc;
    }
    #reactIcon:hover {
      color: #60dafb;
    }
    #sassIcon:hover {
      color: #cc6699;
    }
    #styledComponentsIcon:hover {
      color: #fff;
    }
    #gitIcon:hover {
      color: #f05033;
    }
  }
`;

export const SoftSkills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  ul {
    font-size: 0.8rem;
    list-style: none;
    text-transform: uppercase;
    color: ${(props) => props.theme['opacity']};

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      line-height: 1.6;
      transition: 0.3s;

      &::before {
        content: '✓';
        color: ${(props) => props.theme['blue-300']};
      }

      &:hover {
        color: ${(props) => props.theme['blue-300']};
      }
    }
  }
`;

export const SocialLinks = styled.div`
  width: 100%;
  height: 3.25rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  border-top: 3px solid ${(props) => props.theme['gray-800']};
  background: ${(props) => props.theme['gray-500']};
  border-radius: 0 0 20px 20px;

  a {
    transition: all 0.2s ease-in-out;

    color: ${(props) => props.theme['opacity']};

    svg:hover {
      color: ${(props) => props.theme['blue-500']};
    }
  }
`;
