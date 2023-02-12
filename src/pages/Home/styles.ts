import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

export const AboutMeContainer = styled.div`
  width: 43rem;
  height: 16rem;
  padding: 1rem 5rem;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 20px;
  text-align: center;

  h1 {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  P {
    color: ${(props) => props.theme['opacity']};

    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  line-height: 1.3;
`;

export const EducationContainer = styled.div`
  width: 43rem;
  height: 16rem;
  padding: 1rem 5rem;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 20px;
  text-align: center;

  h1 {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul {
    list-style: none;

    li {
      color: ${(props) => props.theme['opacity']};
      font-size: 0.9rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }
  }
`;

export const CommentContainer = styled.div`
  width: 88rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    flex: 1;
    border-radius: 20px;
  }
`;
